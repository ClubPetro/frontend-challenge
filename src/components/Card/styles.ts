import { Close, Edit } from '@mui/icons-material';
import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const Container = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative ;

  img{
    width: 56px;
    height: 34px;
  }
  h1{
    color: ${colors.green};
    font-weight: 700;
    font-size: 16px;
  }
  .localText{
    font-weight: 400;
    color: ${colors.black};
    font-size: 16px;
    text-overflow: ellipsis ;
    white-space: nowrap;
    overflow: hidden;
  }
  .metaText{
    font-weight: 400;
    color: ${colors.black};
    font-size: 16px;
    margin-top: 11px ;
  }

  .localText:hover{
    overflow: visible; 
    word-wrap: break-word;
    white-space: break-spaces;
    height:auto;
  }
`;

export const EditIcon = styled(Edit)`
  margin-right: 16px;
  color: ${colors.darkGrey};
  width: 16px !important;
`
export const CloseIcon = styled(Close)`
  color: ${colors.darkGrey};
  width: 20px !important;
  margin-bottom: 2px;
`
export const SkeletonContainer = styled.div`
  width: 250px;
  height: 250px;
  margin-top: -82px ;
  margin-bottom: 82px;
`

export const Options = styled.div`
  position: absolute;
  right: 16px;
  justify-content: space-between;
  top: 19px;
`
export const Line = styled.div`
  background-color: ${colors.grey};
  height: 1px;
  width: 100%;
`
export const ContentContainer = styled.div`
  padding-inline: 12px;
  display: flex ;
  height: 100%;
  flex-direction: column ;

  .country-container{
    margin-top: 36px;
  }

  .local{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding-inline: 12px;
    justify-content: center ;
  }

`