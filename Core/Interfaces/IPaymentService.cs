using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IPaymentService
    {
         Task<CustomerCart> CreateOrUpdatePaymentIntent(string cartId);
    }
}