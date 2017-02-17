import React from 'react';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = this.props.project || {title: "", subtitle: "", body: "",
      end_date: Date.now() , category: "", location: ""};
  }

  componentDidMount() {
    if (this.props.params) {
      this.props.fetchProject(this.props.params.projectID);
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.project || {title: "", subtitle: "", body: "",
      end_date: Date.now() , category: "", location: ""});
  }


  handleSubmit(e){
    e.preventDefault();
    if (this.props.project) {
      this.props.updateProject(this.state);
    } else {
      this.props.createProject(this.state);
    }
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    debugger
    return(
      <div>
        <h1>Project Form!</h1>

      </div>
    );
  }

}

export default ProjectForm;
