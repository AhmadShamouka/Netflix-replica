import React from 'react';
import './Watch.css';
import scartext from './assets/scartext.png'
import netlogo from './assets/netlog.png'
import bg from './assets/scarface.jpg'
function Watch() {
  return (
    <div className='Watch'>
    <section className="watch-header">
    <div className='background-watch'>
      <div className="container-watch">   
        <div  className='info-text-watch'>
        <div className='scarimg'>
        <img src={scartext} alt='text'/>
        </div>
        <div className='scartext-watch'>
        <h1 className='title-title-watch'><b>Scarface</b></h1>


          <div class="title-info-watch" >
            <span class="title-info-watch-item item-year">1983</span>
            <span role="presentation" class="info-spacer"> | </span>
            <span class="title-info-watch-item item-maturity">
              <span class="maturity-rating">
              <span class="maturity-number">18+</span>
              </span>
              </span>
              <span role="presentation" class="info-spacer"> | </span>
              <span class="title-info-watch-item item-runtime" >
                <span class="duration-watch">2h 49m</span>
                </span>
                <span role="presentation" class="info-spacer"> | </span>
                <a class="title-info-watch-item item-genre" href="https://www.netflix.com/lb-en/browse/genre/637987">Thrillers</a>
          </div>
          <div className='title-desc-watch'>
          <div className='title-desc-watch-1'>
            <span>
            In a ruthless rise to Miami drug lord, a Cuban-born gangster descends into addiction,
            obsession and brutality, with grisly consequences.
            </span>
            </div>
            <div className='title-desc-watch-2'>
            <span className='desc-title'>Starring:</span>
            <span className='desc-text'>Al Pacino, Steven Bauer, Michelle Pfeiffer</span>
            </div>
          </div>
        </div>
      </div>


      </div>
    
      </div>
      <div className='net-watch'>
          <img src={netlogo} alt='netlog'/>
          <div className='net-watch-wrapper'>
            <div className='net-watch-text'>Watch all you want.</div>
            <div className='net-watch-btn'>
              <button class="net-watch-btn-red" type="submit" role="link">JOIN NOW</button>
            </div>
          </div>
      </div>

  </section>

  <section className='hookup'>
    <div class="hook-hr"></div>
    <div class="hook-text" >Al Pacino stars in this crime epic from director Brian De Palma and screenwriter Oliver Stone.</div>
    <div class="hook-hr"></div>
  </section>




  <section className='details-watch'>
    <div className='details-header'>
    <h2>More Details</h2>
    </div>

    <div className='more-details-container'>
      <div className='more-details-cell'>
        <div class="more-details-label">
          Watch offline
          </div>
        <div class="more-details-item-container">
          <span class="more-details-item item-download">Download and watch everywhere you go.</span>
      </div>
      </div>
      <div className='more-details-cell'>
        <div class="more-details-label">
        Genres
          </div>
        <div class="more-details-item-container">
          <span class="more-details-item item-download">Classic Movies, Crime Movies, Drama Movies, Thriller Movies</span>
      </div>
      </div>
      <div className='more-details-cell'>
        <div class="more-details-label">
        This movie is...
          </div>
        <div class="more-details-item-container">
          <span class="more-details-item item-download">Violent</span>
      </div>
      </div>
      <div className='more-details-cell'>
        <div class="more-details-label">
          Audio
          </div>
        <div class="more-details-item-container">
          <span class="more-details-item item-download">English - Audio Description, English [Original], French</span>
      </div>
      </div>
      <div className='more-details-cell'>
        <div class="more-details-label">
        Subtitles
          </div>
        <div class="more-details-item-container">
          <span class="more-details-item item-download">Arabic, English, French</span>
      </div>
      </div>
    </div>


    <div class="more-details-container-cast">
      <div class="more-details-cell cell-cast">
        <div class="more-details-label">Cast</div>
        <div class="more-details-item-container">
          <span class="more-details-item item-cast">Al Pacino</span>
          <span class="more-details-item item-cast">Steven Bauer</span>
          <span class="more-details-item item-cast">Michelle Pfeiffer</span>
          <span class="more-details-item item-cast">Mary Elizabeth Mastrantonio</span>
          <span class="more-details-item item-cast">Paul Shenar</span>
          <span class="more-details-item item-cast">Robert Loggia</span>
          <span class="more-details-item item-cast" >Miriam Colon</span>
          <span class="more-details-item item-cast">F. Murray Abraham</span>
          <span class="more-details-item item-cast">Harris Yulin</span>
          <span class="more-details-item item-cast">Ángel Salazar</span>
          <span class="more-details-item item-cast">Pepe Serna</span>
        </div>
      </div>
    </div>



  </section>



  <section className='card-watch'>
    <div className='details-header'>
    <h2>More Like This</h2>
    </div>
    <div className='container-cards'>
    <div className='cards-details-container'>
    <a className="title-link" >
      <img className="title-link-img" src={netlogo} alt="The Godfather" loading="lazy" />
    </a>
    <a className="title-link" >
      <img className="title-link-img" src={netlogo} alt="The Godfather" loading="lazy" />
    </a> <a className="title-link" >
      <img className="title-link-img" src={netlogo} alt="The Godfather" loading="lazy" />
    </a> <a className="title-link" >
      <img className="title-link-img" src={netlogo} alt="The Godfather" loading="lazy" />
    </a> <a className="title-link" >
      <img className="title-link-img" src={netlogo} alt="The Godfather" loading="lazy" />
    </a> <a className="title-link" >
      <img className="title-link-img" src={netlogo} alt="The Godfather" loading="lazy" />
    </a>
    </div>
</div>
  </section>


  <section className='comingsoon-watch'>
    <div className='details-header'>
        <h2>Coming Soon</h2>
    </div>

      <div class="coming-soon-container">
      <a class="coming-soon-link" href="/lb-en/title/80237957">
      <div class="coming-soon-title" >Avatar The Last Airbender</div>
      <div class="coming-soon-synopsis">Water. Earth. Fire. Air. Long ago, the four nations lived together in harmony — then everything changed. A live-action adaptation of Aang's story.</div></a>
      <a class="coming-soon-link" href="/lb-en/title/81122198" >
      <div class="coming-soon-title">Heeramandi</div>
      <div class="coming-soon-synopsis" >Sanjay Leela Bhansali brings his majestic signature flair to stories of love and betrayal in the lives of courtesans in pre-independence India.</div></a>
      <a class="coming-soon-link" href="/lb-en/title/81615540" >
      <div class="coming-soon-title" >Squid Game: The Challenge</div>
      <div class="coming-soon-synopsis" >Immersed in the world of "Squid Game," 456 real players put their skills — and character — to the ultimate test for a life-changing $4.56 million prize.</div></a>
      <a class="coming-soon-link" href="/lb-en/title/81480320" >
      <div class="coming-soon-title" >Code 8 Part II</div>
      <div class="coming-soon-synopsis" >In a world where superpowered people are heavily policed by robots, an ex-con teams up with a drug lord he despises to protect a teen from a corrupt cop.</div></a><a class="coming-soon-link" href="/lb-en/title/81024821" >
      <div class="coming-soon-title" >3 Body Problem</div>
      <div class="coming-soon-synopsis" >A fateful decision in 1960s China echoes across space and time to a group of scientists in the present, forcing them to face humanity's greatest threat.</div></a><a class="coming-soon-link" href="/lb-en/title/81223025" >
      <div class="coming-soon-title" >Chicken Run: Dawn of the Nugget</div>
      <div class="coming-soon-synopsis" >A band of fearless chickens flock together to save poultry-kind from an unsettling new threat: a nearby farm that's cooking up something suspicious.</div></a><a class="coming-soon-link" href="/lb-en/title/81243969" >
      <div class="coming-soon-title" >Yu Yu Hakusho</div>
      <div class="coming-soon-synopsis" >After a selfless act costs him his life, teen delinquent Yusuke Urameshi is chosen as a Spirit Detective to investigate cases involving rogue yokai.</div></a>
      <a class="coming-soon-link" href="/lb-en/title/81719139" >
      <div class="coming-soon-title" >Within Sand</div>
      <div class="coming-soon-synopsis" >Ambushed by robbers, a stranded young merchant traverses the scorching desert to get home to his pregnant wife — accompanied by an unexpected friend.</div></a>
      </div>
    

  </section>
  </div>
  );
}

export default Watch;
