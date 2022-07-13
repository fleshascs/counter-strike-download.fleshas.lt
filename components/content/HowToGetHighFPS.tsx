export default function Page() {
  return (
    <div className='page type-page status-publish hentry'>
      <h3 className='text-amber-300 pb-2 text-sm font-medium uppercase'>
        Important config settings
      </h3>
      <ul>
        <li>rate 25000</li>
        <li>fps_max 1000</li>
        <li>developer 1</li>
        <li>ex_interp 0.01</li>
        <li>cl_minmodels 0</li>
        <li>cl_showfps 1</li>
      </ul>
      <h3 className='text-amber-300 py-2 text-sm font-medium uppercase mt-5'>
        Important GPU NVIDIA settings
      </h3>
      <a
        href={require('../../images/how-to-get-high-fps/nvidia-contorl-panel.png')}
        target='_blank'
      >
        <img
          src={require('../../images/how-to-get-high-fps/nvidia-contorl-panel.png')}
          alt='contorl-panel'
        />
      </a>
      Open your "Control Panel", how to open "Control Panel":
      <a href='https://www.lifewire.com/how-to-open-control-panel-2625782' rel='nofollow'>
        Windows 10, 7, XP
      </a>
      <a
        href={require('../../images/how-to-get-high-fps/small-icons-control-panel.png')}
        target='_blank'
      >
        <img
          src={require('../../images/how-to-get-high-fps/small-icons-control-panel.png')}
          alt='contorl-panel'
        />
      </a>
      If your screen looks like this, change "view by:" settings to "small-icons"
      <a href={require('../../images/how-to-get-high-fps/nvidia-cpanel.png')} target='_blank'>
        <img
          src={require('../../images/how-to-get-high-fps/nvidia-cpanel.png')}
          alt='nvidia settings'
        />
      </a>
      <div className='col-sm-8'>Click on the "NVIDIA Control Panel</div>
      <a href={require('../../images/how-to-get-high-fps/maxfps.png')} target='_blank'>
        <img src={require('../../images/how-to-get-high-fps/maxfps.png')} alt='nvidia maxfps' />
      </a>
      Set your settings to "Use my preference emphasizing", and chose performace
      <a href={require('../../images/how-to-get-high-fps/999fps.png')} target='_blank'>
        <img src={require('../../images/how-to-get-high-fps/999fps.png')} alt='nvidia maxfps' />
      </a>
      Tested with:
      <br />
      RAM : 1GB
      <br />
      GPU: 512MB GeForce 7300GT
      <br />
      OS: Windows XP
      <br />
      Final Result: 999fps
      <br />
      In Game: 200-400fps
      <br />
      Maps: de_dust2, de_inferno, 35hp_2
    </div>
  );
}
