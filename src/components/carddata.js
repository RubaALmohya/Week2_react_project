import React from 'react'

function carddata(props) {
    let programmers = {
        pr1:{name:"Ruba" , project:"programmers of the week" , bootcamp:"Python"},
        pr2:{name:"Noura" , project:"movies List App" , bootcamp:"Python"},
        pr3:{name:"Saud" , project:"flowers List App" , bootcamp:"Python"}
    };

  return (
    <div> 
    <div class="container">
      <div class="card">
        <div class="card-header">
          <img src="https://i.pinimg.com/564x/66/ef/d0/66efd0751e3703c649b92a660253b1a2.jpg" alt="" />
        </div>
        <div class="card-body">
          {/* <span class="tag tag-pink">Travel</span> */}
          <h4>programmer 1</h4>
          <p>
          <strong>Name:</strong> {programmers.pr1.name}<br/>
          <strong>Project:</strong> {programmers.pr1.project}<br/>
          <strong>Bootcamp:</strong> {programmers.pr1.bootcamp}<br/>
          </p>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <img src="https://i.pinimg.com/564x/bc/82/4d/bc824d2d4e595a35e002c95a964e7040.jpg" alt="" />
        </div>
        <div class="card-body">
          {/* <span class="tag tag-pink">Travel</span> */}
          <h4>programmer 2</h4>
          <p>
          <strong>Name:</strong> {programmers.pr2.name}<br/>
          <strong>Project:</strong> {programmers.pr2.project}<br/>
          <strong>Bootcamp:</strong> {programmers.pr2.bootcamp}<br/>

          </p>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <img src="https://i.pinimg.com/564x/13/cb/7a/13cb7a5389a76c6ca5b9335b9137de0e.jpg" alt="" />
        </div>
        <div class="card-body">
          {/* <span class="tag tag-pink">Travel</span> */}
          <h4 className='headr'>programmer 2</h4>
          <p>
          <strong>Name:</strong> {programmers.pr3.name}<br/>
          <strong>Project:</strong> {programmers.pr3.project}<br/>
          <strong>Bootcamp:</strong> {programmers.pr3.bootcamp}<br/>
          </p>
        </div>
      </div>
    </div>
    <div className='team'>
    <h1>ًWeek's winning team</h1>
    <p>All teams have been working hard and we thank them for that,<br></br>
The distinguished team we give him a gift for the weekend,<br></br> which is <strong> lunch from a restaurant of their choice</strong></p>
<img className='picteam' src="https://i.pinimg.com/564x/79/70/cf/7970cfea261fab344b6ba6e3caf561a1.jpg"/>
    </div>

    <div className='winteam'>
        <h1 id='wint'>Winning Team</h1>
        <h2 id="teamNAme">DESIGN  TEAM<br/><strong>Congratulations</strong><hr></hr></h2>
        <img id='teamwin' src="https://i.pinimg.com/564x/e9/6d/63/e96d63d72d3d988afda47ab7b1619b37.jpg"/>
   </div>   
    </div>
  )
}

export default carddata


