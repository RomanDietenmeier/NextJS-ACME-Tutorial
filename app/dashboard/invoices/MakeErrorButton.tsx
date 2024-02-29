'use client';

export function MakeErrorButton() {
  return (
    <button
      onClick={() => {
        throw new Error('reee');
      }}
    >
      Make error
    </button>
  );
}
