using System.IO;
using System.Threading.Tasks;
using API.Errors;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Stripe;
using Order = Core.Entities.OrderAggregate.Order;

namespace API.Controllers
{
	public class PaymentsController : BaseApiController
	{
		private readonly IPaymentService _paymentService;
		private const string WhSecret = "";
		private readonly ILogger<IPaymentService> logger;
		public PaymentsController(IPaymentService paymentService, ILogger<IPaymentService> logger)
		{
			this.logger = logger;
			_paymentService = paymentService;
		}

		[Authorize]
		[HttpPost("{cartId}")]
		public async Task<ActionResult<CustomerCart>> CreateOrUpdatePaymentIntent(string cartId)
		{
			var cart = await _paymentService.CreateOrUpdatePaymentIntent(cartId);
			if (cart == null) return BadRequest(new ApiResponse(400, "Cart wrong"));

			return cart;
		}

		[HttpPost("webhook")]
		public async Task<ActionResult> StripeWebhook()
		{
			var json = await new StreamReader(HttpContext.Request.Body).ReadToEndAsync();
			var stripeEvent = EventUtility.ConstructEvent(json, Request.Headers["Stripe-Signature"], WhSecret);

			PaymentIntent intent;
			Order order;

			switch (stripeEvent.Type)
			{
				case "payment_intent.succeeded":
					intent = (PaymentIntent)stripeEvent.Data.Object;
					break;
			}
		}
	}
}
