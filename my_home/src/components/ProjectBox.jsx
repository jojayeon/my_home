import React from 'react';

function ProjectBox({ title, subtitle, description, image, links }) {
  const renderWithLineBreaks = (text) =>
    text.split('\n').map((line, idx) => (
      <React.Fragment key={idx}>
        {line}
        <br />
      </React.Fragment>
    ));

  return (
    <div className="leaf-box">
      <div className="leaf-title">{renderWithLineBreaks(title)}</div>

      <div className="leaf-hover-content">
        {image && <img src={image} alt={title} />}

        <p>
          <strong className="leaf-subtitle">{subtitle}</strong>
          <br />
          {description.map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>

        {/* 링크는 <a> 태그 사이마다 <br /> 넣어 줄바꿈 */}
        <div className="leaf-links">
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="leaf-link small-margin"
                download={link.download || false}
              >
                {renderWithLineBreaks(link.label)}
              </a>
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectBox;
