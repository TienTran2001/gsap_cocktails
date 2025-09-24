import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { cocktailLists } from '../constants';

const CockTails = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#cocktails',
        start: 'top 30%',
        end: 'bottom 80%',
        scrub: true,
      },
    });

    parallaxTimeline
      .from('#c-left-leaf', {
        x: -100,
        y: 100,
      })
      .from('#c-right-leaf', {
        x: 100,
        y: 100,
      });
  }, []);

  return (
    <section id="cocktails" className="noisy">
      <img src="/images/cocktail-left-leaf.png" alt="" id="c-left-leaf" />
      <img src="/images/cocktail-right-leaf.png" alt="" id="c-right-leaf" />

      <div className="list">
        <div className="popular">
          <h2 className="">Most popular cocktail: </h2>
          <ul>
            {cocktailLists.map((drink) => (
              <li key={drink.name}>
                <div className="md:me-28">
                  <h3>{drink.name}</h3>
                  <p>
                    {drink.country} | {drink.detail}
                  </p>
                </div>
                <span>- {drink.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CockTails;
