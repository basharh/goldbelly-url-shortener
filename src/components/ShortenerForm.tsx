import { css } from '@emotion/core';
import { TextField, Button } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export interface ShortenerFormData {
  url: string;
  slug: string;
}

interface ShortenerFormProps {
  onSubmit: (data: ShortenerFormData) => void;
}

const ShortenerForm: React.FC<ShortenerFormProps> = ({ onSubmit }) => {
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
        form > div {
          margin: 20px 0px;
        }
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
            helperText={formik.touched.url && formik.errors.url}
          />
        </div>
        <div>
          <TextField
            id="slug"
            name="slug"
            label="Slug"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.slug}
            error={formik.touched.slug && !!formik.errors.slug}
            helperText={formik.touched.slug && formik.errors.slug}
          />
        </div>
        <div>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ShortenerForm;
