import { getImages } from '@/utils/get-image';
import { FaHeart } from 'react-icons/fa';
import TeamImage from './TeamImage';

export default async function Team() {
  const { imagesArr } = await getImages();

  return (
    <section className="team">
      <aside className="team__yellow">
        <h3>
          Bean for bean <br /> is a friend,
          <br /> partner and a <br />
          fellow.
        </h3>

        <TeamImage imagesArr={imagesArr} />

        <article>
          <div className="bob__names">
            <p>
              Bob Marley , Bob De Niro, Bob Dilan, Bob
              <br /> Downey, Bob Zemeckis, Bob Rodriguez, Bob
              <br /> Opengamer, Bob Miles, Bob Boyle, Bob Fisher
            </p>
            <span>Famous Beans</span>
          </div>

          <div className="bob__names__right">
            <p>
              <span>
                We <FaHeart />
              </span>
              <br />
              what we do
            </p>
          </div>
        </article>
      </aside>

      <aside className="team__blue">
        <video width={640} height={640} controls preload="none" autoPlay loop>
          <source src="/public/beansblue.mp4" type="video/mp4" />
        </video>
      </aside>
    </section>
  );
}
