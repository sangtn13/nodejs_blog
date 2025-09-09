class BlogController {
  // [GET] /blog
  index(req, res) {
    // Sample data - in real app, this would come from database
    const popularPosts = [
      {
        title: "Bản tình ca chua xót",
        description: "Hợp âm cơ bản - 8am syruit đấu cùng gọi.",
        views: "227",
        price: "Free"
      },
      {
        title: "Tình nồng",
        description: "Học hóm của mỗi tỷ về như nhạc phòng khi sự...",
        views: "1885",
        price: "99k"
      },
      {
        title: "Mưa xuân ao hồng",
        description: "Ấm tĩnh lặng của Phố Hội ơi không tỏa được...",
        views: "918",
        price: "Free"
      },
      {
        title: "Tết xưa rồi",
        description: "Những kí ức này hay Gì ra lời hay đầu có...",
        views: "254",
        price: "Free"
      },
      {
        title: "Tuổi thơ",
        description: "Như rừng thông vàng tuyết trắng tuyền mây...",
        views: "361",
        price: "Free"
      },
      {
        title: "Khúc hát đêm mùa",
        description: "Một bài về tình yêu đầu và những âm...",
        views: "475",
        price: "Free"
      }
    ];

    const sheetMusic = [
      {
        title: "Sheet nhạc Xuân mày con về mà ở đâu",
        artist: "Nhạt Ngân",
        price: "404 đ"
      },
      {
        title: "Sheet nhạc Anh Trăng hôn Hồ Long Tén",
        artist: "Lương Bích Hữu",
        price: "268 đ"
      },
      {
        title: "Sheet nhạc Anh còn ra em",
        artist: "Anh Bằng",
        price: "818 đ"
      },
      {
        title: "Sheet Quyền phấn",
        artist: "Thái Quyền, Thái Thiêm",
        price: "97 đ"
      },
      {
        title: "Sheet Mưa Rừng",
        artist: "Nguyễn Anh, Như 2p/3m",
        price: "629 đ"
      }
    ];

    const guitarLessons = [
      {
        title: "Có Anh Ở Đây Rồi",
        description: "Anh Quân, Cường Esward",
        price: "714 đ"
      },
      {
        title: "Thôi Quan",
        description: "Hoàng Cũng",
        price: "538 đ"
      },
      {
        title: "Ước gì",
        description: "Mỹ Tâm",
        price: "721 đ"
      },
      {
        title: "Khi Phút Cuối Đi",
        description: "Phạm Minh Quyết",
        price: "480 đ"
      },
      {
        title: "Nơn Vào Mưa",
        description: "Trung Quân Idol",
        price: "640 đ"
      }
    ];

    const trendingPosts = [
      {
        title: "Đài bạc - Lk thơ nhất",
        category: "Oán Tóng Hây",
        views: "7717"
      },
      {
        title: "Ai chưng được mai",
        category: "Lâng Thức, Trương Thảo Nhi",
        views: "7737"
      },
      {
        title: "Òa là chàng cưng khóac",
        category: "Lâng Phúc, Trương Thảo Nhi",
        views: "1693"
      },
      {
        title: "Chiếc lançắn án",
        category: "Khổng Phương, Nguyễn Văn Chung",
        views: "6589"
      },
      {
        title: "Chò sót thông nó ly",
        category: "Tiến Tiến",
        views: "6015"
      },
      {
        title: "Tiny Love",
        category: "Trịnh Tọy",
        views: "3944"
      },
      {
        title: "Về mưa",
        category: "Về Cải Lương",
        views: "3376"
      },
      {
        title: "Tà ngườếc sự độc",
        category: "Hành Tinh, Trương Thảo Phức",
        views: "3169"
      }
    ];

    res.render('blog', {
      title: 'Blog Học Đàn',
      popularPosts,
      sheetMusic,
      guitarLessons,
      trendingPosts
    });
  }
}

export default new BlogController();
