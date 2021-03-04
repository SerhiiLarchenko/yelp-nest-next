/* eslint-disable react/no-array-index-key */
import { DayWorkingHours } from 'api/businesses/types';

import * as S from './styles';

const WorkingHours = ({
  workingHours,
}: {
  workingHours: DayWorkingHours[];
}) => {
  return (
    <S.WorkingHoursWrapper>
      {workingHours.map(({ start, end, days }, i) => {
        if (days.length === 7) {
          return <span key={i}>{`${start} - ${end} (All days)`}</span>;
        }

        return (
          <S.WorkingHoursInner key={i}>
            <span>{`${start} - ${end}`}</span>
            <span>({days.map((day) => day).join(', ')})</span>
          </S.WorkingHoursInner>
        );
      })}
    </S.WorkingHoursWrapper>
  );
};

export { WorkingHours };
