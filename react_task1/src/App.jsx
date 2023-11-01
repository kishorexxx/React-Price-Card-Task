import './App.css';

function App() {//this function will get called from index.js
  return (
    <div className="wrapper">
      <Card1 /> {/* Here the first card  */}
      <Card2 /> {/* Here the second card  */}
      <Card3 /> {/* Here the third card  */}
    </div>
  );
}

// first card
function Card1(){
  return(
    <div className="card">
      <div className="card_body">
        {/* card header */}
        <div className="card_header">
            <h5 className="card_title">FREE</h5>
            <h2 className="card_price">$0<span class="period">/month</span></h2>
        </div>
        <hr></hr>
        {/* body of the card is here */}
        <div className="card_description">
        <ul>
              <li className="list_checked">Single User</li>
              <li className="list_checked">5GB Storage</li>
              <li className="list_checked">Unlimited Public Projects</li>
              <li className="list_checked">Community Access</li>
              <li className="text-muted">Unlimited Private Projects</li>
              <li className="text-muted">Dedicated Phone Support</li>
              <li className="text-muted">Free Subdomain</li>
              <li className="text-muted">Monthly Status Reports</li>
            </ul>
        </div>
        {/* card button will be shown here */}
        <div className="card_footer">
             <button className="card_btn">BUTTON</button>
        </div>
      </div>
    </div>
  )
}

// second card
function Card2(){
  return(
    <div className="card">
      <div className="card_body">
      {/* card header */}
      <div className="card_header">
            <h5 className="card_title">PLUS</h5>
            <h2 className="card_price">$9<span class="period">/month</span></h2>
        </div>
        <hr></hr>
        {/* body of the card is here */}
        <div className="card_description">
        <ul>
              <li className="list_checked"><b>5 Users</b></li>
              <li className="list_checked">50GB Storage</li>
              <li className="list_checked">Unlimited Public Projects</li>
              <li className="list_checked">Community Access</li>
              <li className="list_checked">Unlimited Private Projects</li>
              <li className="list_checked">Dedicated Phone Support</li>
              <li className="list_checked">Free Subdomain</li>
              <li className="text-muted">Monthly Status Reports</li>
            </ul>
        </div>
        {/* card button will be shown here */}
        <div className="card_footer">
             <button className="card_btn">BUTTON</button>
        </div>
      </div>
    </div>
  )
}

// third card
function Card3(){
  return(
    <div className="card">
      <div className="card_body">
        {/* card header */}
      <div className="card_header">
            <h5 className="card_title">PRO</h5>
            <h2 className="card_price">$49<span class="period">/month</span></h2>
        </div>
        <hr></hr>
        {/* body of the card is here */}
        <div className="card_description">
        <ul>
              <li className="list_checked">Unlimited User</li>
              <li className="list_checked">150GB Storage</li>
              <li className="list_checked">Unlimited Public Projects</li>
              <li className="list_checked">Community Access</li>
              <li className="list_checked">Unlimited Private Projects</li>
              <li className="list_checked">Dedicated Phone Support</li>
              <li className="list_checked"><b>Unlimited </b>Free Subdomains</li>
              <li className="list_checked">Monthly Status Reports</li>
            </ul>
        </div>
        {/* card button will be shown here */}
        <div className="card_footer">
             <button className="card_btn">BUTTON</button>
        </div>
      </div>
    </div>
  )
}

export default App;