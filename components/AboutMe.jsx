import React from 'react'

const AboutMe = () => {
  return (
    <div className="mt-48 mx-10 md:mx-16">
      <h2 className="font-bold text-xl text-blue-700 mb-16">PERSONAL INFOS</h2>
      <div className="flex md:flex-row flex-col pl-6 md:pl-16">
        <div className="w-full md:w-1/2">
          <div className="aboutMe-content">
            <h3 className="aboutMe-h3">First Name :</h3>
            <p className="aboutMe-p">Yassir</p>
          </div>
          <div className="aboutMe-content">
            <h3 className="aboutMe-h3">Age :</h3>
            <p className="aboutMe-p">20 Years</p>
          </div>
          <div className="aboutMe-content">
            <h3 className="aboutMe-h3">Freelancer :</h3>
            <p className="font-semibold pl-3 text-green-600">Available</p>
          </div>
          <div className="aboutMe-content">
            <h3 className="aboutMe-h3">Phone :</h3>
            <p className="aboutMe-p">+212675467067</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2">
          <div className="aboutMe-content">
            <h3 className="aboutMe-h3">Last Name :</h3>
            <p className="aboutMe-p">Kibou</p>
          </div>
          <div className="aboutMe-content">
            <h3 className="aboutMe-h3">Nationality :</h3>
            <p className="aboutMe-p">Moroccan</p>
          </div>
          <div className="aboutMe-content">
            <h3 className="aboutMe-h3">Email :</h3>
            <p className="aboutMe-p">yassirKibou06@gmail.com</p>
          </div>
          <div className="aboutMe-content">
            <h3 className="aboutMe-h3">Langages :</h3>
            <p className="aboutMe-p">English, Arabic</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe