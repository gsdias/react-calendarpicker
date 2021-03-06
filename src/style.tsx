import styled, { css } from 'styled-components'

export const Root = styled.div(
  () => css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
  `,
)

export const Container = styled.div(
  () => css`
    width: 284px;
    border: var(--chakra-borders-1px);
    border-color: var(--chakra-colors-gray-200);
    border-radius: 8px;
    position: absolute;
    z-index: 10;
    background-color: var(--chakra-colors-white);
    padding: var(--chakra-space-2);
    margin-top: var(--chakra-space-1);
  `,
)

export const ListDays = styled.div(
  () => css`
    display: grid;
    grid-gap: 0;
    grid-template-columns: repeat(7, minmax(0, 1fr));
  `,
)

export const WeekDays = styled.div(
  () => css`
    display: grid;
    grid-gap: 0;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    justify-items: center;
    color: #dedede;
    font-size: 12px;
    margin-top: 10px;
  `,
)
