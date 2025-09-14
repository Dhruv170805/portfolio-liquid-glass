import "./App.css";
import Navbar from "./components/Navbar";
import GlassCard from "./components/GlassCard";
import resumeData from "./data/resumeData";

function App() {
  return (
    <div className="app-bg">
      <Navbar />
      <div className="main-content">
        <GlassCard title="About Me" content={resumeData.about} />
        <GlassCard title="Skills" content={<ul>{resumeData.skills.map(skill => (<li key={skill}>{skill}</li>))}</ul>} />
        <GlassCard title="Experience" content={<ul>{resumeData.experience.map(exp => (<li key={exp.title}><b>{exp.title}</b> ({exp.period})<br/>{exp.descriptions.join(' ')} </li>))}</ul>} />
        <GlassCard title="Projects" content={<ul>{resumeData.projects.map(project => (<li key={project.title}><b>{project.title}</b><br/>{project.description}</li>))}</ul>} />
        <GlassCard title="Education" content={<ul>{resumeData.education.map(ed => (<li key={ed.degree}><b>{ed.degree}</b><br/>{ed.institution}<br/>{ed.period}</li>))}</ul>} />
        <GlassCard title="Certifications" content={<ul>{resumeData.certifications.map(cert => (<li key={cert}>{cert}</li>))}</ul>} />
        <GlassCard title="Contact" content={
          <div>
            <div><b>Email:</b> {resumeData.contact.email}</div>
            <div><b>Phone:</b> {resumeData.contact.phone}</div>
          </div>
        }/>
      </div>
    </div>
  );
}
export default App;
