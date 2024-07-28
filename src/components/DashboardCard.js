import { useEffect, useState } from "react";
import Image from 'next/image';
import Facebook from '../../public/images/icon-facebook.svg';
import Instagram from '../../public/images/icon-instagram.svg';
import Twitter from '../../public/images/icon-twitter.svg';
import Youtube from '../../public/images/icon-youtube.svg';
import ArrowUp from '../../public/images/icon-up.svg';
import ArrowDown from '../../public/images/icon-down.svg';
import classNames from 'classnames';

function DashboardCard() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  const iconMap = {
    'facebook': Facebook,
    'twitter': Twitter,
    'instagram': Instagram,
    'youtube': Youtube
  }

  const mediaBorder = {
    'facebook': 'bg-facebook',
    'twitter': 'bg-twitter',
    'instagram': 'bg-gradient-to-r from-instagram_from to-instagram_to',
    'youtube': 'bg-youtube'
  }

  return (
    <div className="container grid xl:grid-cols-4 lg:grid-cols-2 gap-6 font-inter w-fit">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data.map((element, index) => (
          <div key={index} className={classNames("rounded-md relative bg-red-700", `${mediaBorder[element.media]}`)}>
            <div className="xl:w-60 lg:w-80 md:w-96 w-80 rounded-b-md relative top-1 dark:bg-dark_desaturated_blue_card_bg bg-light_grayish_blue_card_bg dark:text-white text-very_dark_blue_text hover:bg-gray-200 p-6 text-center hover:dark:bg-[#304463]">
              <div className="flex items-center gap-2 justify-center">
                <div>
                  <Image
                    src={iconMap[element.media]}
                    alt={`${element.media} icon`}
                    className=""
                  />
                </div>
                <p className="text-xs font-semibold text-dark_grayish_blue_text">{element.username}</p>
              </div>
              <p className="text-5xl font-bold pt-5 pb-1">{element.followers}</p>
              <p className="text-[10px] text-desaturated_blue_text tracking-[0.25em]">{element.media === "youtube" ? "SUBSCRIBER" : "FOLLOWERS"}</p>
              <div className="flex justify-center items-center gap-1 pt-4">
                <Image 
                  src={element.isIncrease ? ArrowUp : ArrowDown}
                  alt="Arrow"
                  className="w-2"
                />
                <p className={classNames("text-[10px] font-bold dark:dark_grayish_blue_text", `${element.isIncrease ? 'text-lime_green' : 'text-bright_red'}`)}>{element.followersToday} Today</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default DashboardCard;