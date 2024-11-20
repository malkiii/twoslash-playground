import { ImageResponse } from 'next/og';
// import { type NextRequest } from 'next/server';

export const runtime = 'edge';

const fontMono = fetch(new URL('../../../public/fonts/Caskaydia.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer(),
);

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          background: '#1E1E1E',
          fontFamily: 'Mono',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '6rem',
            fontSize: 155,
            borderRadius: '20px',
            padding: '2rem',
            paddingTop: '0.5rem',
            background: '#3178C6',
          }}
        >
          <div>{'//'}</div>
          <div>{'^?'}</div>
        </div>
      </div>
    ),
    {
      width: 1440,
      height: 756,
      fonts: [
        {
          name: 'Mono',
          data: await fontMono,
          style: 'normal',
        },
      ],
    },
  );
}
