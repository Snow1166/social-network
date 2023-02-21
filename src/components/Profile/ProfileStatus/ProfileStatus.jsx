import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateMethodMode = () => {
        this.setState(
            {editMode: true,
            }
        )
    }

    deactivateMethodMode = (e) => {
        this.setState(
            {editMode: false}
        )
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState( {
                status: this.props.status
            })
        }
    }

    render() {
        return (<div>
            {!this.state.editMode
                ? <div>
                    <span onDoubleClick={()=> this.activateMethodMode()}>{this.props.status ||'Задать статус'}</span>
                </div>
                : <div>
                    <input onChange={(e) => this.onStatusChange(e)} autoFocus={true} onBlur={() => this.deactivateMethodMode()} value={this.state.status} type=""/>
                </div>
            }
        </div>)
    }
}


export default ProfileStatus;
