import React from 'react'

const isMobile = window.innerWidth < 768;
const Achive = () => {
  return (
    <div>
        <div id="Achivements">
              <div className="card rounded col-10" style={{
        backgroundColor: "#120d18",
        marginTop: isMobile ? "1pc":"5rem",
        marginLeft: isMobile ? "2pc":"7pc",
        padding: isMobile ? "2pc":"2rem",
      }}>
                <div className=" card-header">
                  <a className="btn" data-bs-toggle='collapse' href="#Item1">
                    <h3 style={{color:'#ac0dd4'}}>International Conference</h3>
                  </a>
                </div>
                <div id="Item1" className="collapse show" data-bs-parent='#Achivements'>
                  <div className="card-body text-white">
                    I attended the International Conference on Recent Research Advancements in Computational Sciences (ICRRACS-2023) at Loyola College, where I presented a paper titled 'Ethical Considerations in Social Network Mining and Web Mining: Trends and Future Outlook.'
                  </div>
                </div>
                <div className="card-header">
                  <a className="btn" data-bs-toggle='collapse' href="#Item2">
                    <h3 style={{color:'#ac0dd4'}}>Two Day International Conference</h3>
                  </a>
                </div>
                <div id="Item2" className="collapse" data-bs-parent='#Achivements'>
                  <div className="card-body text-white">
                  I attended a two-day international conference on 'Crimes Against Women and Children: Trends, Issues & Challenges' at DRBCCC Hindu College, where I presented a paper titled 'Machine Learning in Preventing Internet Crimes.'
                  </div>
                </div>
                <div className="card-header">
                  <a className="btn" data-bs-toggle='collapse' href="#Item3">
                    <h3 className='ps-3' style={{color:'#ac0dd4'}}>Digital Expo</h3>
                  </a>
                </div>
                <div id="Item3" className="collapse" data-bs-parent='#Achivements'>
                  <div className="card-body text-white">
                        As part of a team, I participated in a Digital Expo at DRBCCC Hindu College, where we developed a mini-game application using Android Studio and secured first prize.
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Achive