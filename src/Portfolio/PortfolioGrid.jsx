import PortfolioItem from "./PortfolioItem";
import './PortfolioGrid.css';
export default function PortfolioGrid({projects}){
    return (
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <PortfolioItem 
              key={index} 
              imgSrc={project.imgSrc} 
              description={project.description} 
              heading={project.heading}
              footerHtml={project.footer}
              details={project.details}
            />
          ))}
        </div>
      );
}