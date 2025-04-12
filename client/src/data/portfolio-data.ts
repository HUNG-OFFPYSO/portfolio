export const portfolioData = {
  // Thông tin cá nhân
  name: "Tên của bạn",
  title: "Web Developer",
  shortBio: "Tôi chuyên về lập trình web với 5 năm kinh nghiệm. Đam mê của tôi là tạo ra những sản phẩm đáp ứng nhu cầu người dùng và giải quyết các vấn đề thực tế.",
  profileImage: "", // Để trống nếu không có ảnh

  // Mục giới thiệu
  about: {
    paragraphs: [
      "Tôi bắt đầu hành trình của mình với lập trình web vào năm 2018. Niềm đam mê của tôi với việc phát triển phần mềm bắt nguồn từ mong muốn tạo ra các giải pháp kỹ thuật số hữu ích.",
      "Với 5 năm kinh nghiệm, tôi đã phát triển chuyên môn trong phát triển frontend và luôn tìm cách cải thiện kỹ năng của mình. Tôi tin rằng trải nghiệm người dùng là nền tảng cho mọi dự án thành công.",
      "Ngoài công việc, tôi còn dành thời gian cho đọc sách và chạy bộ. Những hoạt động này giúp tôi cân bằng cuộc sống và duy trì sự sáng tạo."
    ],
    education: {
      degree: "Kỹ sư Công nghệ thông tin",
      university: "Đại học Công nghệ",
      year: "2018"
    },
    experience: {
      years: 5,
      projects: 20
    }
  },
  aboutImage: "", // Để trống nếu không có ảnh

  // Kỹ năng
  skills: {
    technical: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Node.js", level: 75 }
    ],
    soft: [
      { 
        name: "Làm việc nhóm", 
        description: "Khả năng hợp tác và làm việc hiệu quả trong môi trường đồng đội" 
      },
      { 
        name: "Giao tiếp", 
        description: "Giao tiếp rõ ràng, hiệu quả qua nhiều kênh khác nhau" 
      },
      { 
        name: "Giải quyết vấn đề", 
        description: "Phân tích và tìm giải pháp hiệu quả cho các thách thức" 
      },
      { 
        name: "Quản lý thời gian", 
        description: "Lập kế hoạch và sắp xếp công việc hiệu quả để đạt deadline" 
      }
    ]
  },

  // Dự án
  projects: [
    {
      title: "Dự án 1",
      description: "Ứng dụng web cho phép người dùng quản lý danh sách công việc và lên kế hoạch.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "",
      liveUrl: "https://example.com/project1",
      codeUrl: "https://github.com/yourusername/project1"
    },
    {
      title: "Dự án 2",
      description: "Website thương mại điện tử với tích hợp thanh toán và quản lý sản phẩm.",
      technologies: ["JavaScript", "HTML/CSS", "API"],
      image: "",
      liveUrl: "https://example.com/project2",
      codeUrl: "https://github.com/yourusername/project2"
    },
    {
      title: "Dự án 3",
      description: "Ứng dụng theo dõi thói quen và mục tiêu cá nhân với biểu đồ tiến độ.",
      technologies: ["Vue.js", "Firebase", "Tailwind"],
      image: "",
      liveUrl: "https://example.com/project3",
      codeUrl: "https://github.com/yourusername/project3"
    }
  ],
  projectsUrl: "https://github.com/yourusername",

  // Thông tin liên hệ
  contact: {
    email: "contact@yourdomain.com",
    phone: "+84 123 456 789",
    address: "Thành phố Hồ Chí Minh, Việt Nam"
  },

  // Mạng xã hội
  socialLinks: [
    { name: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
    { name: "GitHub", url: "https://github.com/yourusername" },
    { name: "Twitter", url: "https://twitter.com/yourusername" },
    { name: "Instagram", url: "https://instagram.com/yourusername" }
  ]
};
