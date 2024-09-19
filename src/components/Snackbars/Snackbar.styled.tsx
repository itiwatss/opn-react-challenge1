import styled from 'styled-components';
import { MaterialDesignContent } from 'notistack';

export const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-success': {
    fontFamily: 'prompt',
    backgroundColor: '#2D7738',
  },
  '&.notistack-MuiContent-error': {
    fontFamily: 'prompt',
    backgroundColor: '#970C0C',
  },
}));
