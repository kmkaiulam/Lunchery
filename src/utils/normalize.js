import { schema} from 'normalizr';

const membersSchema = new schema.Entity('members');
const createdBySchema = new schema.Entity('createdBy')
const groupSchema = new schema.Entity('groups', {
    members: [membersSchema],
    createdBy:createdBySchema
})

const groupsSchema = new schema.Entity('groups', {
    groups: [groupSchema]
})



   





export default groupsSchema



