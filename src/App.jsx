import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Moon,
  Sun,
  Code,
  Database,
  Smartphone,
  Globe,
  ChevronDown,
  User,
  Briefcase,
  FolderOpen,
  Award,
  Code2,
  Network,
  Server,
  LayoutDashboard,
  Layers3,
  CircuitBoard,
  Cloud,
} from "lucide-react";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skills = [
    {
      name: "React.js",
      icon: <LayoutDashboard className="w-5 h-5" />,
      level: 85,
    },
    {
      name: "Redux",
      icon: <Layers3 className="w-5 h-5" />,
      level: 70,
    },
    {
      name: "Node.js",
      icon: <Server className="w-5 h-5" />,
      level: 60,
    },
    {
      name: "Express.js",
      icon: <CircuitBoard className="w-5 h-5" />,
      level: 60,
    },
    {
      name: "Flutter",
      icon: <Smartphone className="w-5 h-5" />,
      level: 75,
    },
    {
      name: "Oracle",
      icon: <Database className="w-5 h-5" />,
      level: 80,
    },
    {
      name: "PostgreSQL",
      icon: <Cloud className="w-5 h-5" />,
      level: 80,
    },
    {
      name: "MySQL",
      icon: <Network className="w-5 h-5" />,
      level: 80,
    },
  ];

  const experiences = [
    {
      title: "Front-End Developer",
      company: "Globe Company - Central Bank of Syria",
      period: "Sep 2024 - Dec 2024",
      description:
        "Developed a user-friendly web application using React.js to assist banks in working with the RTGS (Real-Time Gross Settlement) system. Designed a system enabling bank employees to input MX messages through the website.",
      technologies: ["React.js", "JavaScript", "UI/UX Design"],
    },
    {
      title: "Front-End Developer and System Analyst",
      company: "Globe Company - Commercial Bank of Syria & DAMAN Company",
      period: "Feb 2024 - Aug 2024",
      description:
        "Developed a custom React.js library to simplify ERP system UI creation. Ensured reusability, scalability, and adherence to modern UI/UX standards. Enabled dynamic UI generation via JSON input.",
      technologies: ["React.js", "ERP Systems", "UI/UX", "System Analysis"],
    },
    {
      title: "Mobile and Web Application Developer",
      company: "Freelance Projects",
      period: "2023 - Present",
      description:
        "Developed multiple applications including Eventopia (Event Management System), Aqar w Car (property and car application), SQL to React Generator, and Medicine Application.",
      technologies: ["React.js", "Flutter", "Node.js", "Database Design"],
    },
  ];

  const projects = [
    {
      title: "ERP library",
      description:
        "Developed a custom React.js library to simplify ERP system UI creation, Ensured reusability, scalability, and adherence to modern UI/UX standards ,Enabled dynamic UI generation (fields, buttons, labels, etc.) via JSON input.",
      technologies: ["React.js", "bootstrap", "Real-time Updates", "JSON"],
      type: "Web App",
    },
    {
      title: "moualimi - Private teacher Management System",
      description:
        "Moualimi is a comprehensive platform designed to streamline the management of private tutoring services. It empowers teachers, students, and parents with tools to efficiently handle scheduling, payments, student progress tracking, and communication — all in one place.",
      technologies: ["React.js", "Real-time Updates", "Admin Dashboard"],
      type: "Web App",
    },
    {
      title: "Eventopia - Event Management System",
      description:
        "A comprehensive Flutter app for managing events with React.js admin dashboard. Features event oversight, registrations, contract management, and real-time notifications.",
      technologies: [
        "Flutter",
        "React.js",
        "Real-time Updates",
        "Admin Dashboard",
      ],
      type: "Mobile & Web App",
    },
    {
      title: "Aqar w Car - Property & Car Platform",
      description:
        "Built a comprehensive React.js admin dashboard for managing real estate and car listings, user interactions, and business workflows with seamless communication features.",
      technologies: [
        "React.js",
        "Admin Dashboard",
        "Real Estate",
        "Business Workflows",
      ],
      type: "Web Application",
    },
    {
      title: "SQL to React Generator",
      description:
        "A React generator that creates folder structures and pages with CRUD operations by uploading SQL files. Automatically generates inputs, selects, and tables.",
      technologies: ["React.js", "SQL", "Code Generation", "CRUD Operations"],
      type: "Development Tool",
    },
    {
      title: "Medicine Application",
      description:
        "Flutter-based mobile app providing medicine-related features including dosage reminders, medicine descriptions, and prescription management with intuitive interface.",
      technologies: ["Flutter", "Mobile Development", "Healthcare", "UI/UX"],
      type: "Mobile App",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Mohamad Arnaout
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {[
                "hero",
                "about",
                "experience",
                "projects",
                "skills",
                "contact",
              ].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-primary ${
                    activeSection === section
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {section}
                </motion.button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center pt-20"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            {...fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent"
          >
            Mohamad Arnaout
          </motion.h1>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            Frontend Developer
          </motion.p>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Dynamic Frontend Developer with expertise in React.js, Flutter, and
            modern web technologies. Passionate about creating scalable
            solutions and bridging the gap between technical requirements and
            user needs.
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group"
            >
              View My Work
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ExternalLink className="w-4 h-4" />
              </motion.div>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <ChevronDown className="w-8 h-8 mx-auto text-muted-foreground" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <User className="w-8 h-8 text-primary" />
                About Me
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Learn more about my background, education, and what drives my
                passion for development
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeInUp} className="space-y-6">
                <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a dynamic Frontend Developer with a strong background in
                  designing, analyzing, and optimizing database systems.
                  Currently in my fourth year studying Information Technology
                  Engineering at Damascus University, specializing in Software
                  Engineering.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My expertise spans modern frontend technologies, UI/UX
                  principles, and database architecture. I'm passionate about
                  innovation and leveraging technology to drive organizational
                  success, always striving to bridge the gap between technical
                  requirements and user needs.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Damascus, Syria
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Software Engineering Student
                  </div>
                </div>
              </motion.div>

              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                <Card className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">6+</div>
                  <div className="text-sm text-muted-foreground">
                    Projects Completed
                  </div>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">
                    Technologies
                  </div>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1</div>
                  <div className="text-sm text-muted-foreground">
                    Major Companies
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <Briefcase className="w-8 h-8 text-primary" />
                Experience
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                My professional journey and the impact I've made in various
                organizations
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-10"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.title}-${index}`}
                  variants={fadeInUp}
                  className="relative"
                  aria-label={`Experience at ${exp.company}`}
                >
                  <Card className="p-6 hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground mb-1 text-center">
                          {exp.title}
                        </h3>
                        <p className="text-primary/70 font-medium text-center">
                          {exp.company}
                        </p>
                      </div>
                      <Badge
                        variant="secondary"
                        className="w-fit text-sm px-3 py-1 rounded-md"
                      >
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={`${tech}-${techIndex}`}
                          variant="outline"
                          className="text-xs px-2 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <FolderOpen className="w-8 h-8 text-primary" />
                Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A showcase of my recent work and the solutions I've built
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full p-6 hover:shadow-xl transition-all duration-300">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{project.type}</Badge>
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <CardTitle className="text-xl mb-2">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <CardDescription className="text-base mb-4 leading-relaxed">
                        {project.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <Code className="w-8 h-8 text-primary" />
                Skills & Technologies
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The tools and technologies I use to bring ideas to life
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold mb-3">{skill.name}</h3>
                    <div className="w-full bg-muted rounded-full h-2 mb-2">
                      <motion.div
                        className="bg-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <Mail className="w-8 h-8 text-primary" />
                Get In Touch
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ready to work together? Let's discuss your next project
              </p>
            </div>

            <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
              <Card className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Contact Information
                    </h3>

                    <motion.div
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">
                          mohamadarnaout416@gmail.com
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">
                          +963 968478016
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">
                          Damascus, Syria
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Let's Connect
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      I'm always interested in new opportunities and exciting
                      projects. Feel free to reach out if you'd like to work
                      together!
                    </p>

                    <a
                      href="mailto:mohamadarnaout416@gmail.com"
                      className="flex gap-4"
                    >
                      <Button size="lg" className="flex-1">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </Button>
                    </a>

                    <div className="flex gap-4 pt-4">
                      <a
                        href="https://github.com/MohamadAr4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="icon">
                          <Github className="w-5 h-5" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground"
          >
            © 2025 Mohamad Arnaout.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}

export default App;
