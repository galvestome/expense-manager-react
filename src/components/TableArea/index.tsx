import { Table, TableHeadColumn } from './styles';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';

type Props = {
    list: Item[]
}

export const TableArea = ({ list }: Props) => {
    return (
        <Table>
            <thead>
                <tr>
                    <TableHeadColumn width={100}>Date</TableHeadColumn>
                    <TableHeadColumn width={130}>Category</TableHeadColumn>
                    <TableHeadColumn>Title</TableHeadColumn>
                    <TableHeadColumn width={150}>Value</TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <TableItem key={index} item={item} />
                ))}
            </tbody>
        </Table>
    );
}