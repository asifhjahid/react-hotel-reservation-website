import styled from 'styled-components'

const FilterStyle = styled.div`

         padding: 5rem 0;
         .filter-form {
            width: 60vw;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(202px, 1fr));
            grid-row-gap: 2rem;
                grid-column-gap: 40px;
            }
            .form-group {
                text-transform: capitalize;
            }
            label {
            display: block;
            letter-spacing: var(--mainSpacing);
            margin-bottom: 0.5rem;
            }
            .form-control {
            width: 100%;
            background: transparent;
            font-size: 1rem;
            }
            .size-inputs {
            display: flex;
            }
            .size-input {
            width: 40%;
            padding: 0.2rem;
            border: 1px solid var(--mainBlack);
            border-radius: 0.3rem;
            margin-right: 0.3rem;
            }
            .single-extra label {
            display: inline-block;
            font-size: 0.8rem;
            margin-left: 0.5rem;
            }
            @media screen and (min-width: 776px) {
            .filter-form {
                width: 70vw;
                }
            }
            @media screen and (min-width: 992px) {
            .filter-form {
                width: 95vw;
                max-width: 1170px;
                }
            }



`
export default FilterStyle;