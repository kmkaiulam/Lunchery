import React from 'react';
import {connect} from 'react-redux';
import './MyWorkWeek.css';

export class MyWorkWeek extends React.Component {
    render() {
        return  (
            <div className= 'myWorkWeek'><h2>WorkWeek</h2>
            <section className= 'workWeek'>
                <div>
                    <div>
                        <strong>Monday</strong>
                    </div>
                    <div>
                        {this.props.workweek.monday}
                    </div>
                </div>
                <div>
                    <div>
                        <strong>Tuesday</strong>
                    </div>
                    <div>
                        {this.props.workweek.tuesday}
                    </div>
                </div>
                <div>
                    <div>
                        <strong>Wednesday</strong>
                    </div>
                    <div>
                        {this.props.workweek.wednesday}
                    </div>
                </div>
                <div>
                    <div>
                        <strong>Thursday</strong>
                    </div>
                    <div>
                        {this.props.workweek.thursday}
                    </div>
                </div>
                <div>
                    <div>
                        <strong>Friday</strong>
                    </div>
                    <div>
                        {this.props.workweek.friday}
                    </div>
                </div>
            </section>
        </div>
        );
    }  
}

const mapStateToProps=state => ({
    workweek:state.auth.user.workweek
});

export default connect(mapStateToProps)(MyWorkWeek);