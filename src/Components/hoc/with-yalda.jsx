import React from 'react';
import axios from 'axios'; 
let final_id = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")).user_id : false;
function withYalda(Component) {
    return class withYalda extends Component {
        state = {
            user : JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : false,
        }
        componentDidMount() {
            if (final_id) {
                axios
                    .get(`https://daryaftyar.ir/storeV2/user/${final_id}`)
                    .then(res => {
                        let user = res.data;
                        this.setState({ user });
                        localStorage.setItem("user", JSON.stringify(user));
                    })
                .catch(err => alert(err.message))
            }
        }
        render() {
            return (
                <Component
                    {...this.props}
                    user = {this.state.user}
                />
            );
        }
    }
}
export default withYalda;