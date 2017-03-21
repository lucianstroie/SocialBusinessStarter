
import React from 'react';
import ProjectIndexItem from './project_index_item';
import Carousel from 'nuka-carousel';


class ProjectIndex extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  leftDecorator() {
   return {
    component: React.createClass({
      render() {
        return (
          <button
            className="slider-button"
            onClick={ this.props.currentSlide < this.props.slidesToScroll && this.props.currentSlide !== 0  ?
              () => this.props.goToSlide(0) :
              this.props.previousSlide  }>
            <i className="fa fa-angle-left fa-5x" aria-hidden="true" />
          </button>
        );
      }
    }),
    position: 'CenterLeft'
  };
 }

 rightDecorator() {
   return {
    component: React.createClass({
        render() {
          return (
            <button
              className="slider-button"
              onClick={this.props.currentSlide > this.props.slideCount - this.props.slidesToScroll ?
                () => this.props.goToSlide(this.props.slideCount) :
                this.props.nextSlide  }>
              <i className="fa fa-angle-right fa-5x" aria-hidden="true" />
            </button>
          );
        },
      }),
      position: 'CenterRight'
    };
 }

  render () {
  

    return (
      <div>
        <div className="carousel">
          <Carousel
            wrapAround = {true}
            initialSlideWidth={500}
            initialSlideHeight={300}
            height={'630px'}
            slideWidth='1020px'
            autoplay={true}
            autoplayInterval={9000}
            wrapAround={true}
            cellSpacing={40}
            cellAlign={'center'}
            decorators={[ this.leftDecorator() , this.rightDecorator() ]}
            >
            <div><img src="https://s3.amazonaws.com/socialbusinessstarter-seed/sbs-pics/projects/EcoTourism.png"/></div>
            <div><img src="https://s3.amazonaws.com/socialbusinessstarter-seed/sbs-pics/projects/innovation_labs.jpg"/></div>
            <div><img src="https://s3.amazonaws.com/socialbusinessstarter-seed/sbs-pics/projects/delta.png"/></div>
            <div><img src="https://s3.amazonaws.com/socialbusinessstarter-seed/sbs-pics/projects/mest-boutique.jpg"/></div>
            <div><img src="https://s3.amazonaws.com/socialbusinessstarter-seed/sbs-pics/projects/Pestera-Meziad.jpg"/></div>
          </Carousel>
        </div>
      <div className="index-background">


      <div className="index-background">

        <div className="index-container">
              {
                this.props.projects.map((project)=> (

                    <ProjectIndexItem
                      key={project.id}
                      project={project} />

                ))
              }
        </div>

      </div>
    </div>
    </div>
    );
  }
}
// { idx % 3 === 0 ? <h1>Some Text</h1> : null }

export default ProjectIndex;
