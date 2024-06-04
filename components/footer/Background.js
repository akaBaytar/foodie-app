import classes from './Background.module.css';

export default function Background() {
  return (
    <div className={classes.footerBackground}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <defs>
          <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop
              offset='0%'
              style={{ stopColor: '#8f3a09', stopOpacity: '1' }}
            />
            <stop
              offset='100%'
              style={{ stopColor: '#59453c', stopOpacity: '1' }}
            />
          </linearGradient>
        </defs>
        <path
          fill='url(#gradient)'
          d='M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,181.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
      </svg>
    </div>
  );
}
