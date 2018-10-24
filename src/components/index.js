import React, { Component } from "react";
import { Route, Switch, withRouter } from 'react-router-dom';

class App extends Component {
  render() {
      return ( 
          <div>
              <h1 className = "heading-primary">
                  <div className = "title-plate" >
                      {/* <p className = "title-box"></p>  */}
                      <p className = "title-shadow title1">Search</p> 
                      <p className = "title-shadow title2">Party</p> 
                      <p className = "title-box"></p> 
                  </div>
              </h1>

							<div className= "video-plate">
								<span>SOME VIDEO OR PICs GO HERE</span>
							</div>

							<div className= "about-plate">
									<h2>About Us</h2>
									<p> 
										Lorem ipsum dolor sit amet, mei et ridens cetero.Erat soluta essent in vis.At duo minim nemore inermis, eam eu nibh assentior, vero principes vel te.Novum voluptatibus eu sea, in nam graeci everti vituperata.Regione antiopam gloriatur no cum.Te facilis consulatu quo, suas mutat latine vel ad, iuvaret expetendis theophrastus ut vim.
									Saepe electram vulputate vel eu, falli deterruisset consectetuer has cu.Lucilius oportere cu sed, vim appetere indoctum torquatos in .Ex sea novum fabulas albucius, vis postea accumsan reprehendunt ex.Pri in unum sanctus patrioque, sea ut timeam pericula definitiones.Liber cetero an quo, mea at alia menandri definiebas.His nonumes complectitur ad, sit quidam eirmod cu, evertitur tincidunt nec te.
									Oratio eligendi eloquentiam per ei, splendide incorrupte ei qui.Ius putant delenit propriae ut.Vel an liber nobis nominati, graeci graeco eligendi ius id, partem definitionem at quo.Et nec harum incorrupte, possim alienum eos in .Quem odio expetendis in sed.
									Has no percipit disputando.Te pri tamquam perpetua, ne est esse pertinacia.Quas petentium reprehendunt ad vis, mazim persecuti eum ne, appareat sapientem ne vim.Ei euismod eleifend consulatu mea, utinam assentior vix ne.Noster similique vix no, vis brute rationibus ex.
									Nam audire luptatum referrentur ut, epicurei tractatos an vix, nec ad soleat fastidii luptatum.Ut lucilius principes his.Accusata suavitate usu ad, mei senserit eloquentiam repudiandae te.Ad mel libris forensibus.Ad mel purto essent, at quo wisi verear percipitur.Eu dolor exerci assueverit vix.Ne quo prodesset rationibus. 
									</p>
									< p >
										Lorem ipsum dolor sit amet, mei et ridens cetero.Erat soluta essent in vis.At duo minim nemore inermis, eam eu nibh assentior, vero principes vel te.Novum voluptatibus eu sea, in nam graeci everti vituperata.Regione antiopam gloriatur no cum.Te facilis consulatu quo, suas mutat latine vel ad, iuvaret expetendis theophrastus ut vim.
									Saepe electram vulputate vel eu, falli deterruisset consectetuer has cu.Lucilius oportere cu sed, vim appetere indoctum torquatos in .Ex sea novum fabulas albucius, vis postea accumsan reprehendunt ex.Pri in unum sanctus patrioque, sea ut timeam pericula definitiones.Liber cetero an quo, mea at alia menandri definiebas.His nonumes complectitur ad, sit quidam eirmod cu, evertitur tincidunt nec te.
									Oratio eligendi eloquentiam per ei, splendide incorrupte ei qui.Ius putant delenit propriae ut.Vel an liber nobis nominati, graeci graeco eligendi ius id, partem definitionem at quo.Et nec harum incorrupte, possim alienum eos in .Quem odio expetendis in sed.
									Has no percipit disputando.Te pri tamquam perpetua, ne est esse pertinacia.Quas petentium reprehendunt ad vis, mazim persecuti eum ne, appareat sapientem ne vim.Ei euismod eleifend consulatu mea, utinam assentior vix ne.Noster similique vix no, vis brute rationibus ex.
									Nam audire luptatum referrentur ut, epicurei tractatos an vix, nec ad soleat fastidii luptatum.Ut lucilius principes his.Accusata suavitate usu ad, mei senserit eloquentiam repudiandae te.Ad mel libris forensibus.Ad mel purto essent, at quo wisi verear percipitur.Eu dolor exerci assueverit vix.Ne quo prodesset rationibus. 
									</p>
							</div>

          </div>
      );
  }
}

export default withRouter(App);