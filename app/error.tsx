'use client';

type Props = {
  error: Error;
};

export default function ErrorPage({ error }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Something went wrong
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#555' }}>
        Could not fetch the data. {error.message}
      </p>
    </div>
  );
}

/* 'use client';

type Props = {
  error: Error;
};

const Error = ({ error }: Props) => {
  return <p>Could not fetch the list of notes. {error.message}</p>;
};

export default Error; */
