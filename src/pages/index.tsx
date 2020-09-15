import { css } from '@emotion/core';
import ShortenerForm, { ShortenerFormData } from '../components/ShortenerForm';

export default function Home() {
  return (
    <div
      css={css`
        padding: 32px;
        background-color: #ccc;
      `}
    >
      <ShortenerForm
        onSubmit={(data: ShortenerFormData) => {
          // noop
        }}
      />
    </div>
  );
}
