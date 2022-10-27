import axios from "axios";

const options = {
    method: 'GET',
    url: 'http://numbersapi.com/1729/math',
    // params: {fragment: 'true', json: 'true'},
    // headers: {
    //   'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    //   'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
    // }
  };

  
const Result = () => {

    function check() {
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        })
    }
    return ( 
        
        <div className="check1">
            <button type="submit" onClick={check}>cLICK ME</button>
        </div>
      );
}
 
export default Result;