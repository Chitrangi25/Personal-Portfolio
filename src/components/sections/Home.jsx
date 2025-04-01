export const Home = () => {
  return <section id= "home"
                  className="min-h-screen flex items-center justify-center relative ">
                    <div className="text-center z-10 px-4">
                      <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right p-4">
                        Hi! I'm Chitrangi Kasliwal
                      </h1>
                      <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                      I am an enthusiastic beginner developer with a passion for solving problems through code. 
                      I’ve recently started my journey in software development, focusing on front-end technologies 
                      like HTML, CSS, JavaScript and React. I'm committed to expanding my skill set and am excited to continue learning 
                      new frameworks and tools. My goal is to build engaging, user-friendly applications and contribute to meaningful projects
                      </p>
                      <div className="flex justify-center space-x-4">
                        <a href="#projects"
                           className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative 
                           overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                          View Projects
                        </a>

                        <a href="#contact"
                           className="border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                           hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-300/10">
                          Contact Me
                        </a>
                      </div>
                    </div>
                  </section>
};