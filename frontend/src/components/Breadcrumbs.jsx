import { Link as RouterLink, useLocation } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { styled } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';

const StyledBreadcrumbs = styled(Breadcrumbs)({
  backgroundColor: '#f0f0f0',
  padding: '10px 215px',
  borderRadius: '4px',
  marginTop: '15px',
  marginBottom: '10px',
});

function BreadcrumbsComponent() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) {
    return null;
  }

  return (
    <StyledBreadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
      <Link component={RouterLink} to="/" color="inherit" underline="none">
        <HomeIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: '4px' }} /> {/* Icono de Home */}
        Inicio
      </Link>
      {pathnames.map((path, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayPath = path.replace(/-/g, ' ');

        return (
          <Link
            key={path}
            component={RouterLink}
            to={routeTo}
            color={isLast ? 'text.primary' : 'inherit'}
            underline="none"
            aria-current={isLast ? 'page' : undefined}
            sx={{
              fontWeight: isLast ? 'bold' : 'normal',
              bgcolor: isLast ? 'rgba(204, 255, 0, 0.3)' : 'transparent',
              padding: isLast ? '4px 8px' : '0px',
              borderRadius: isLast ? '10px' : '0px',
            }}
          >
            {capitalizeFirstLetter(displayPath)}
          </Link>
        );
      })}
    </StyledBreadcrumbs>
  );
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default BreadcrumbsComponent;
