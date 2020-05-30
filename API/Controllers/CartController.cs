using System.Threading.Tasks;
using API.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class CartController : BaseApiController
    {
        private readonly ICartRepository _cartRepository;
        private readonly IMapper _mapper;
        public CartController(ICartRepository cartRepository, IMapper mapper)
        {
            _mapper = mapper;
            _cartRepository = cartRepository;
        }

        [HttpGet]
        public async Task<ActionResult<CustomerCart>> GetCartById(string id)
        {
            var cart = await _cartRepository.GetCartAsync(id);

            return Ok(cart ?? new CustomerCart(id));
        }

        [HttpPost]
        public async Task<ActionResult<CustomerCart>> UpdateCart(CustomerCartDto cart)
        {
            var customerCart = _mapper.Map<CustomerCartDto, CustomerCart>(cart);

            var UpdateCart = await _cartRepository.UpdateCartAsync(customerCart);

            return Ok(UpdateCart);
        }

        [HttpDelete]
        public async Task DeleteCartAsync(string id)
        {
            await _cartRepository.DeleteCartAsync(id);
        }
    }
}