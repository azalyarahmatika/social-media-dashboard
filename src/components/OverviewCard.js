import { useEffect, useState } from "react";
import Image from 'next/image';
import Facebook from '../../public/images/icon-facebook.svg';
import Instagram from '../../public/images/icon-instagram.svg';
import Twitter from '../../public/images/icon-twitter.svg';
import Youtube from '../../public/images/icon-youtube.svg';
import ArrowUp from '../../public/images/icon-up.svg';
import ArrowDown from '../../public/images/icon-down.svg';
import classNames from 'classnames';

function OverviewCard() {
  const [overview, setOverview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/overview.json')
      .then(response => response.json())
      .then(data => {
        setOverview(data);
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

  return (
    <div className="container grid xl:grid-cols-4 lg:grid-cols-2 gap-6 font-inter w-fit">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        overview.map((element, index) => (
          <div key={index} className="xl:w-60 lg:w-80 md:w-96 w-80 rounded-md dark:bg-dark_desaturated_blue_card_bg bg-light_grayish_blue_card_bg text-white p-6 hover:dark:bg-[#304463] hover:bg-gray-200">
            <div className="">
              <div className="flex justify-between items-center w-full">
                <p className="text-xs text-desaturated_blue_text font-semibold">{element.metric}</p>
                <Image
                  src={iconMap[element.media]}
                  alt={`${element.media} icon`}
                  className=""
                />
              </div>  
              <div className="flex justify-between pt-6">
                <p className="dark:text-white_text text-very_dark_blue_text text-3xl font-bold">{element.value}</p>
                <div className="flex items-center gap-1">
                  <Image
                    src={element.isIncrease === true ? ArrowUp : ArrowDown}
                    alt={`${element.media} icon`}
                    className=""
                  />
                  <p className={classNames("text-xs font-semibold", `${element.isIncrease === true ? "text-lime_green" : "text-bright_red"}`)}>{element.percentageChange}%</p>
                </div>
              
              </div> 
            </div>
            
            
          </div>
         
        ))
      )}
    </div>
  )
}

export default OverviewCard;