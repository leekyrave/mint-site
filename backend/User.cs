namespace backend
{
    public class User
    {
        public int Id { get; set; }
        public string login { get; set; }
        public string email { get; set; }
        public string passwordHash { get; set; }
        
        public long regTime { get; set; }

    }
}
