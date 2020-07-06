//dateSrting 이 포함된 객체를 받아서 time 태그로 감싼 컴포넌트를 리턴해주는 유틸 함수
import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
