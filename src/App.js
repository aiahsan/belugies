import React from 'react';
import './App.css';
import Icon from './componentes/new/icons';
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
function App() {
  return (
    <>
      <div className='hero'>
        <div className='nav-cst'>
          <div className='nav-left'>
            <Link
              activeclass='active'
              to='Featured'
              spy={true}
              smooth={true}
              duration={250}
            >
              {' '}
              Featured
            </Link>
            <Link
              activeclass='active'
              to='Learn'
              spy={true}
              smooth={true}
              duration={250}
            >
              {' '}
              Learn
            </Link>
            <Link
              activeclass='active'
              to='Roadmap'
              spy={true}
              smooth={true}
              duration={250}
            >
              {' '}
              Roadmap
            </Link>
            <Link
              activeclass='active'
              to='FAQ'
              spy={true}
              smooth={true}
              duration={250}
            >
              {' '}
              FAQ
            </Link>
          </div>
          <div className='nav-right'>
            <img src='/images/b3.png' />
            <img src='/images/b2.png' />
            <img src='/images/b1.png' />
          </div>
        </div>
        <div className='hero-inner'>
          <Icon name='d1' />
          <video controls src='/images/Belugie NFTs.mp4' />
        </div>
      </div>
      <Element name='Learn'>
        <div className='what'>
          <div className='container'>
            <img className='nft' src='images/characters.2248cdca.png' />
            <h2 className='mt-118px'>THE BEGINNING</h2>
            <div className='text-box-p'>
              <div className='text-box'>
                Trying to figure out her first NFT she sighed,
                <br /> the options are vast and the world is wide.
                <br />
                <br /> So many ideas to set in motion,
                <br /> she knew that she wanted to start with the ocean.
                <br />
                <br /> “Belugies” she decided, they would be her focus,
                <br /> and releasing those guys, she knew others would notice.
                <br />
                <br /> 8000 different options, which one will you get?
                <br /> So many cute outfits, like Belugie Roulette!
                <br />
                <br /> Come with us and release them into the sea, And join our
                community of the wild &amp; free.
                <br />
                <br /> That should be enough, nothing more to explain, <br />
                Now watch the Belugies make waves on the Blockchain.
              </div>
              <div className='text-box-img'>
                <img
                  className='w-100'
                  src='images/single-belugie.8ca521ab.png'
                />
              </div>
            </div>
            <div className='text-box-p'>
              <div className='text-box-img'>
                <img className='mt-26-op' src='images/artist.07445c77.png' />
              </div>
              <div>
                <h2 className='t-right'>Meet the artist.</h2>
                <div className='text-box-1 text-box-btm '>
                  Hi, I’m Abigail! I am the artist behind these Belugies. I am
                  14 years old and I am in my first year of high school. I spend
                  my time doing school work, drawing, playing with my 8 pets,
                  and being an awesome big sister and role model to my 10 year
                  old younger brother. I really hope you enjoy my NFTs half as
                  much as I enjoyed creating them :)
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
      <Element name='Roadmap'>
        <div className='faq'>
          <div className='container'>
            <h1>Roadmap</h1>
            <p className=' '>
              Here at Belugies we are trying to do good for the world and get
              more young people and artists creating their art and publishing it
              on-chain.
              <br />
              <br />
              Your Belugies NFT is both a sick art piece, an investment into
              young artists, as well as donations to:
              <br />
            </p>
            <ul className='mt-3 ml-8 space-y-1'>
              <li>
                Beluga whales &amp; non-profits that clean up the oceans (10%)
              </li>
              <li>Sunshine Kids Foundation™ for Children with cancer (10%)</li>
            </ul>
            <br />
            <br />
            <p>
              This project starts with Abigail and fam but it is just as much
              your project as it is ours. We believe Belugies has a big future
              ahead of it and we want YOUR help to grow this project. Seriously,
              let’s do this.
            </p>
            <h3 className='text-2xl  mt-8'>
              What are we going to do with the funds?
            </h3>
            <p className='mt-4 ml-8'>
              To celebrate selling out we will have a mega meeting at the
              Belugies Clubhouse with founders (including our 14 year old artist
              Abigail) where we will be doing a massive giveaway of 150 SOL and
              will talk about the future of Belugies! <br />
              <br />
              We will begin development of our Belugies cartoon book that will
              be fun, creative, character inclusive, and will educate children
              about climate issues, money, blockchain technology and assets.
              This will be an engaging and colorful project we are really
              excited to start on and we want YOUR help and opinions for the
              development of this book!
              <br />
              <br />
              We believe we have a great future ahead of us with Belugies and
              will be working on collaborations with other projects, multiple
              marketplace listings, community engagement and initiatives,
              airdrops, token royalties (25% of secondary market sales), and
              even more! This project is just as much ours as it is yours so we
              very much look forward to working with our community and taking
              Belugies TO THE MOON!
            </p>
            <p />
          </div>
        </div>
      </Element>
      <Element name='FAQ'>
        <div className='faq1'>
          <div className='container'>
            <h1>FAQ</h1>
            <div>
              <h2 className=' '>What are Belugies?</h2>
              <p className='mt-5 '>
                Belugies are the oh-so cutest collection of hand-illustrated,
                algorithmically generated NFTs available on the Solana. This
                October 2021 edition of Belugies will contain 8,000 randomly
                assembled Belugies with the most character of all the fish in
                the sea. I mean… do you know about beluga whales? They are so
                cute and silly.
                <br />
                <br />
                Every single Belugie minted on the blockchain has a unique
                combination of features and are ALL 1-for-1. That means if you
                want to join our club and you obtain a Belugie it will be just
                as special and rare as you are ;)
                <br />
                <br />
                These Belugies were created with love for our animal friends by
                14 year old Abigail also known as @PeachSunday on her Youtube
                channel! We would LOVE to have you in our club so pop on over to
                our discord “The Belugies Clubhouse” to talk all things art,
                NFTs, BELUGA WHALES, charity, the future of Belugies, and share
                in our passion for animals and creativity! <br />
                <br />
                Also, please visit the #Introduce-yourself channel there to give
                yourself a shout out and let us all know where you swim from!
                <br />
                <br />
                We are very excited to meet you!
              </p>
              <h2 className=' mt-8'>
                What happens after I purchase a Belugie?
              </h2>
              <p className='mt-5 '>
                Your Belugie will be stored in the wallet you used to purchase
                them. Your Belugie(s) will be viewable in the phantom wallet app
                and on a Solana marketplace once we have integrated the
                contract!
              </p>
              <h2 className=' mt-8'>What can I do with my Belugie?</h2>
              <p className='mt-5  l'>
                It’s yours. You own it outright and are free to use it however
                you like under a non-exclusive license.
              </p>
              <h2 className='mt-8'>Who is the team behind Belugies?</h2>
              <p className='mt-5'>
                Including Abigail aka PeachSunday, we are a team of 3 other
                members who are also her family unit sometimes known as Pods in
                the whale world. Our skills include design, web development,
                business strategy, community outreach, and leadership.
              </p>
              <h2 className='mt-8'>Why should you get a Belugie? ?</h2>
              <p className='mt-5 t '>
                Well not just because it’s an NFT and because it’s a BELUGA
                WHALE but when you purchase a Belugie you will be contributing
                to a 14 year olds creativity AND will be engaging in activism as
                we will be donating a significant portion of the proceeds from
                our primary and even secondary sales to multiple beluga whale
                organizations, a children’s hospital program AND will be
                adopting beluga whales whose sponsorship will be gifted to
                random Belugie owners.
                <br />
                <br /> Also, by owning a Belugie you will be eligible to enter
                NFT and Solana giveaways that we will be hosting on social media
                and in the Belugies Clubhouse!
                <br />
                <br />
                Please read our roadmap below to learn more about this project,
                how you can take part, and also be rewarded for long-term
                holding a Belugie.
              </p>
              <h2 className=' '>Why should you get a Belugie? </h2>
              <p className=''>
                Well not just because it’s an NFT and because it’s a BELUGA
                WHALE but when you purchase a Belugie you will be contributing
                to a 14 year olds creativity AND will be engaging in activism as
                we will be donating a significant portion of the proceeds from
                our primary and even secondary sales to multiple beluga whale
                organizations, a children’s hospital program AND will be
                adopting beluga whales whose sponsorship will be gifted to
                random Belugie owners.
                <br />
                <br /> Also, by owning a Belugie you will be eligible to enter
                NFT and Solana giveaways that we will be hosting on social media
                and in the Belugies Clubhouse!
                <br />
                <br /> Please read our roadmap below to learn more about this
                project, how you can take part, and also be rewarded for
                long-term holding a Belugie.
              </p>
              <h2 className='lg:text-5xl text-4xl mt-10'>Reservations?</h2>
              <p className='mt-5 text-xl lg:text-2xl'>
                We have reserved 100 Belugies for giveaways in competitions,
                marketing promotions and collaborations, holder airdrops, etc.
                These will not occupy early token ids and will be given out
                after launch to help our project grow. The 4 founders of our
                project have each been given a Belugie as well. The remainder
                are all available for purchase.
              </p>
              <h2 className='lg:text-5xl text-4xl mt-10'>
                Ok, I’m in… How much for a Belugie?{' '}
              </h2>
              <p className='mt-5 text-xl lg:text-2xl'>
                This edition of Belugies will be offered for a flat rate mint
                price of 0.8 SOL and you are
              </p>
              <p>welcome to mint up to 20 Belugies per transaction :)</p>
            </div>
          </div>
        </div>
      </Element>

      <div className='footer'>
        <div className='container footer-colr'>
          <div className='jus'>
            <img
              className='nft-logo'
              src='/images/small-belugie.fdb99c33.png'
            />
          </div>
          <div className='nav-right'>
            <img src='/images/b3.png' />
            <img src='/images/b2.png' />
            <img src='/images/b1.png' />
          </div>
          <div className='emal'>
            <span>@2021 Belugies LLC</span>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default App;
