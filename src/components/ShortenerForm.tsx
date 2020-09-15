import { css } from '@emotion/core';
import { TextField, Button } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export interface ShortenerFormData {
  url: string;
  slug: string;
}

interface ShortenerFormProps {
  message: string;
  onSubmit: (data: ShortenerFormData) => void;
}

const ShortenerForm: React.FC<ShortenerFormProps> = ({ message, onSubmit }) => {
  const formik = useFormik({
    initialValues: { url: '', slug: '' },
    validationSchema: Yup.object({
      url: Yup.string()
        .max(255, 'Must be 255 characters or less')
        .required('Required'),
      slug: Yup.string().max(20, 'Must be 20 characters or less')
    }),
    onSubmit
  });

  return (
    <div
      css={css`
        align-self: flex-start;
        width: 70%;
        padding: 10px 0;
        display: flex;
        align-items: center;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          width: 100%;
        `}
      >
        <form onSubmit={formik.handleSubmit} name="shortener-form">
          <div>
            <TextField
              id="url"
              name="url"
              label="Url"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.url}
              error={formik.touched.url && !!formik.errors.url}
              helperText={(formik.touched.url && formik.errors.url) || ' '}
              fullWidth
              variant="outlined"
            />
          </div>
          <div
            css={css`
              display: flex;
              > div:first-child {
                margin-right: 20px;
              }
            `}
          >
            <div
              css={css`
                flex: auto;
              `}
            >
              <TextField
                id="slug"
                name="slug"
                label="Slug"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.slug}
                error={formik.touched.slug && !!formik.errors.slug}
                helperText={(formik.touched.slug && formik.errors.slug) || ' '}
                fullWidth
                variant="outlined"
              />
            </div>
            <div>
              <Button variant="contained" type="submit" size="medium">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
      <div
        css={css`
          color: red;
        `}
      >
        {message}
      </div>
    </div>
  );
};

export default ShortenerForm;
