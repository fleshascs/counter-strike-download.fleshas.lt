import DownloadButtons from '../DownloadButtons';

export default function Page() {
  return (
    <div className='page type-page status-publish hentry'>
      <h2 className='text-amber-300 pb-2 text-sm font-medium uppercase'>
        Download Counter-Strike 1.6
      </h2>
      <p>
        Išleidimo data 18, 2013 Failo dydis 200MB 100% Švarus instalas be priedų Galimybė žaisti
        Half-Life Single/Multiplayer Dvigubas protokolas (48 + 47) Dvigubas protokolas leis zaisti
        P47 ir P48 serveriuose, veikiantis serverių sąrašas (Find Server), Internet serverių
        sąrašas, Galimybė pridėti megtamą CS 1.6 serverį (Favorite)m veikianti LAN funkcija, Šis CS
        1.6 instalas yra apsaugotas nuo įvairių kenkėjiškų slowhack'ų, tokių kaip:
      </p>
      <ul>
        <li>Įvairūs klavėtūros klavišų pakeitimai</li>
        <li>Auto krovimas į kenkėjiškus serverius</li>
        <li>Config.cfg(jūsų Counter-Strike nustatymų) redagavimas</li>
      </ul>
      <p>
        Veikiantis HLTV Varikliuko versija (1.1.2.6 build 4554), Galimybė žaisti Internet ir LAN
        serveriuose. Pašalintos visos reklamos, cs xtcs.
      </p>
      <DownloadButtons className='mt-6' />
      <h3 className='text-amber-300 py-2 text-sm font-medium uppercase mt-5'>
        Apie Counter-Strike 1.6
      </h3>
      <a href={require('../../images/csdownload/2.png')} target='_blank'>
        <img src={require('../../images/csdownload/2.png')} alt='contorl-panel' />
      </a>
      <p className='mt-5'>
        Counter-Strike - buvo išleistas 1999 m. Birželio mėn. Tai žaidimas kuris pasaulyje turi savo
        vertę. Counter Strike vienas iš labiausiai prestižintų visų laikų šaudymo žaidimų. Pradėjus
        žaisti žaidimą jums leidžia pasirinkti ar norite žaisti su robotais, botais, ar su kitais
        žaidėjais. Pasirinkus prieš ką žaisite ir iėjus į viena iš pasirinktų serverių galėsite
        pasirinkti komandą, tai gali būti teroristai kurie stengiasi laimėti roundą padėjus bombą,
        policininkai kurie kovoja su teroristais arba žiurovai kurie stebi šia dvikovą. Visos
        komandos (išskyrus žiūrovus) turi tikslą, tikslai nustatomi pagal pasirinktą žemėlapį,
        tačiau turbūt pagrindinis būtų tiesiog nužudyti kuo daugiau priešininkų ir pačiam likti
        gyvam. Po roundo prasideda kitas roundas, tada visi mire žaidėjai prisikelia ir viskas
        prasideda per nauja.
      </p>
    </div>
  );
}
