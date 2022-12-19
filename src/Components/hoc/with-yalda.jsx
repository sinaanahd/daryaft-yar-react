import React from 'react';
import axios from 'axios';
let final_id = JSON.parse(localStorage.getItem("yalda-user")) ? JSON.parse(localStorage.getItem("yalda-user")) : 341393410; 
function withYalda(Component) {
    return class withYalda extends Component {
        state = {
            user : JSON.parse(sessionStorage.getItem("user")) ? JSON.parse(sessionStorage.getItem("user")) : false,
        }
        componentDidMount() {
            axios
                .get(`https://daryaftyar.ir/storeV2/user/${final_id}`)
                .then(res => {
                    let user = res.data;
                    this.setState({ user });
                    sessionStorage.setItem("user", JSON.stringify(user));
                    console.log(user);
                })
            .catch(err => alert(err.message))
        }
        render() {
            return (
                <Component
                    {...this.props}
                    data={this.state}
                />
            );
        }
    }
}
export default withYalda;