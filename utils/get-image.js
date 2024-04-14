import JuliaImg from '../assets/illya-img.jpg';
import VladaImg from '../assets/Vlada-img.jpg';
import YulyaImg from '../assets/Yulya-img.jpg';
import LenaImg from '../assets/Lena-img.jpg';

export async function getImages() {
  const imagesArr = [JuliaImg, VladaImg, YulyaImg, LenaImg];

  return { imagesArr };
}
