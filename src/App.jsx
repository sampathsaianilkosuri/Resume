import React from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaBirthdayCake, FaLanguage, FaChess, FaMusic, FaLaptopCode, FaUser, FaTools, FaCode, FaRobot, FaBriefcase, FaGraduationCap, FaTrophy } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      {/* Page 1 */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        <div className="flex flex-col md:flex-row">
          {/* Main Content - Left Column (70%) */}
          <div className="md:w-[70%] p-8">
            <h1 className="text-4xl font-bold mb-2">SAMPATH SAI ANIL KOSURI</h1>
            
            {/* Contact Information */}
            <div className="flex flex-wrap gap-4 mb-6 text-sm">
              <a href="mailto:sampathsaianilkosuri@gmail.com" className="flex items-center gap-2">
                <FaEnvelope className="text-accent" />
                sampathsaianilkosuri@gmail.com
              </a>
              <a href="tel:6300550177" className="flex items-center gap-2">
                <FaPhone className="text-accent" />
                6300550177
              </a>
              <a href="https://github.com/sampathsaianilkosuri" className="flex items-center gap-2">
                <FaGithub className="text-accent" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/sampath-sai-anil-kosuri-43aba224a" className="flex items-center gap-2">
                <FaLinkedin className="text-accent" />
                LinkedIn
              </a>
            </div>

            {/* Profile */}
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <FaUser className="text-accent text-xl" />
                <h2 className="text-2xl font-semibold text-accent">Profile</h2>
              </div>
              <p className="text-gray-600">
                Smart, confident, and seeking employment as a Software Engineer in your
                organization, where I can utilize my knowledge and experience to help the company
                reach its goals.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <FaCode className="text-accent text-xl" />
                <h2 className="text-2xl font-semibold text-accent">Technical Skills</h2>
              </div>
              <div className="space-y-2">
                <p><strong>Programming:</strong> Python (Automation), C, Java, URDF</p>
                <p><strong>Version Controls:</strong> GITHUB, GIT</p>
                <p><strong>Libraries:</strong> OpenCV, NumPy, pandas, matplotlib, Media-Pipe</p>
                <p><strong>Database:</strong> Structured Query Language (SQL)</p>
                <p><strong>Robotics:</strong> ROS2, Gazebo Simulation, SLAM, NAV2</p>
                <p><strong>Hardware:</strong> STM32 Nucleo(F413ZH) Board, Arduino Mega 2560/Uno/Nano, BTS7960/L298N Motor Drivers, ESP32, FS-I6S Transmitter/Receiver, Rotary Encoders, Jetson Orin Nano, Raspberry Pi</p>
                <p><strong>IoT:</strong> IoT with AI Integration</p>
                <p><strong>Mechanical:</strong> Motor Torque Calculations, Robotics Design and Assembly</p>
                <p><strong>PCB Design:</strong> Schematic, Footprints, Simulation</p>
                <p><strong>Electronics:</strong> Soldering Work, Drilling Work, Heat Blower Work, Multimeter</p>
              </div>
            </section>

            {/* Tools */}
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <FaTools className="text-accent text-xl" />
                <h2 className="text-2xl font-semibold text-accent">Tools</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {["PyCharm", "VS Code", "STM32CubeIDE/MX", "Colab", "Jupyter", "Arduino IDE", "EasyEDA", "Sololearn"].map((tool) => (
                  <span key={tool} className="bg-secondary px-3 py-1 rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <strong>AI Assistants:</strong> ChatGPT, Claude_AI, DeepSeek, Blackbox, Gemini, Cursorai, Gamma, Bolt
              </div>
            </section>
          </div>

          {/* Right Column (30%) */}
          <div className="md:w-[30%] bg-primary/10 p-8">
            {/* Personal Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-accent mb-4">Personal Details</h2>
              
              <div className="flex items-center gap-2">
                <FaBirthdayCake className="text-accent" />
                <span>22-11-2001</span>
              </div>
              
              <div className="flex items-center gap-2">
                <FaLanguage className="text-accent" />
                <span>English, Telugu</span>
              </div>

              <div className="space-y-2">
                <p><strong>Father's Name:</strong> Mr. Trimurthulu</p>
                <p><strong>Mother's Name:</strong> Mrs. Nagalakshmi</p>
              </div>

              {/* Hobbies */}
              <h2 className="text-2xl font-semibold text-accent mb-4">Hobbies</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <FaChess className="text-accent" />
                  <span>Chess</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMusic className="text-accent" />
                  <span>Music</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaLaptopCode className="text-accent" />
                  <span>Learning new technologies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 2 */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-8">
          {/* Projects */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <FaRobot className="text-accent text-xl" />
              <h2 className="text-2xl font-semibold text-accent">Projects</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Person Following UGV</h3>
                <ul className="list-disc list-inside ml-4 text-gray-600">
                  <li>Developed an autonomous UGV that tracks a selected individual using DAM4+SAM2</li>
                  <li>Implemented person tracking for luggage-carrying applications</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Autonomous Navigation UGV (Gazebo Simulation)</h3>
                <ul className="list-disc list-inside ml-4 text-gray-600">
                  <li>Created a mapping system using SLAM Toolbox for navigation</li>
                  <li>Implemented autonomous navigation with the Nav2 Stack in Gazebo</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Face Following Drone</h3>
                <ul className="list-disc list-inside ml-4 text-gray-600">
                  <li>Designed a system to detect faces and follow individuals based on their position in the frame</li>
                  <li>Integrated real-time face detection with drone control algorithms</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Gesture-Controlled Drone</h3>
                <ul className="list-disc list-inside ml-4 text-gray-600">
                  <li>Developed a drone control system based on finger count detection</li>
                  <li>Implemented hand gesture recognition for intuitive drone operation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <FaBriefcase className="text-accent text-xl" />
              <h2 className="text-2xl font-semibold text-accent">Experience</h2>
            </div>
            <div>
              <h3 className="font-semibold">Robotics Electronics Engineer - Kakinada Institute of Engineering and Technology</h3>
              <ul className="list-disc list-inside ml-4 text-gray-600">
                <li>Guided students in implementing real-world projects</li>
                <li>Experience in designing and developing embedded systems for robotic applications</li>
                <li>Expertise in PCB design, including schematic capture, Footprint using tools like EasyEDA, KiCad</li>
                <li>Expertise in soldering and PCB assembly for electronic components and circuits</li>
                <li>Proficient in drilling and cutting components for mechanical assembly and enclosures</li>
                <li>Skilled in designing and fabricating cabinets for housing robotics systems</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <FaGraduationCap className="text-accent text-xl" />
              <h2 className="text-2xl font-semibold text-accent">Education</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">B.Tech in Artificial Intelligence</h3>
                <p className="text-gray-600">KIET College, Korangi, AP</p>
                <p className="text-gray-600">Graduation Year: 2024 | Score: 70%</p>
              </div>
              <div>
                <h3 className="font-semibold">Diploma in Mechanical Engineering</h3>
                <p className="text-gray-600">KITS College, Divili, AP</p>
                <p className="text-gray-600">Year of Completion: 2021 | Score: 86%</p>
              </div>
              <div>
                <h3 className="font-semibold">Secondary School (10th Grade)</h3>
                <p className="text-gray-600">Bhashyam School, Samalkot, AP</p>
                <p className="text-gray-600">Year of Completion: 2018 | Score: 95%</p>
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <FaTrophy className="text-accent text-xl" />
              <h2 className="text-2xl font-semibold text-accent">Achievements</h2>
            </div>
            <ul className="list-disc list-inside ml-4 text-gray-600">
              <li>Got a certificate of merit for being among the top 5/10 performers in the National Chess Competition</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;