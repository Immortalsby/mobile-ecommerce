using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class CustomerCartDto
    {
        [Required]
        public string Id { get; set; }
        public List<CartItemDto> Items { get; set; }
    }
}