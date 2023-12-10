
<template>
  <div class="container">
    <h1 class="fw-bold my-5">Meet Our Team</h1>
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4" v-for="(i, j) in team" :key="j">
        <div class="our-team border border-dark rounded">
          <div class="picture">
            <img :src="require('@/assets/photos/team/' + i.path)" class="img-fluid">
          </div>
          <div class="team-content">
            <h3 class="name">{{ i.name }}</h3>
            <h4 class="title">{{ i.role }}</h4>
            <!-- Button to trigger the modal -->
            <button @click="showModal(i)" type="button" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#teamMemberModal">
              View Details
            </button>
          </div>  
        </div>
      </div>
    </div>

    <!-- Modal to view team members details -->
    <div class="modal fade" id="teamMemberModal" tabindex="-1" aria-labelledby="teamMemberModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="teamMemberModalLabel">Team Member Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <!-- Dummy data in the modal body -->
            <p>Name: {{ selectedTeamMember.name }}</p>
            <p>Role: {{ selectedTeamMember.role }}</p>
            <!-- Add more details as needed -->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.our-team {
  padding: 30px 0 40px;
  margin-bottom: 30px;
  background-color: #f7f5ec;
  text-align: center;
  overflow: hidden;
  position: relative;
}

.our-team .picture {
  display: inline-block;
  height: 130px;
  width: 130px;
  margin-bottom: 50px;
  z-index: 1;
  position: relative;
}

.our-team .picture::before {
  content: "";
  width: 100%;
  height: 0;
  border-radius: 50%;
  background-color: #fe8d41;
  position: absolute;
  bottom: 135%;
  right: 0;
  left: 0;
  opacity: 0.9;
  transform: scale(3);
  transition: all 0.3s linear 0s;
}

.our-team:hover .picture::before {
  height: 100%;
}

.our-team .picture::after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #2C8A28;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.our-team .picture img {
  width: 100%;
  height: auto;
  border-radius: 50%;
  transform: scale(1);
  transition: all 0.9s ease 0s;
}

.our-team:hover .picture img {
  box-shadow: 0 0 0 14px #f7f5ec;
  transform: scale(0.7);
}

.our-team .title {
  display: block;
  font-size: 15px;
  color: #4e5052;
  text-transform: capitalize;
}

.our-team .social {
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: #1369ce;
  position: absolute;
  bottom: -100px;
  left: 0;
  transition: all 0.5s ease 0s;
}

.our-team:hover .social {
  bottom: 0;
}

.our-team .social li {
  display: inline-block;
}

.our-team .social li a {
  display: block;
  padding: 10px;
  font-size: 17px;
  color: white;
  transition: all 0.3s ease 0s;
  text-decoration: none;


}

.our-team .social li a:hover {
  color: #1369ce;
  background-color: #f7f5ec;
}
</style>

<script>
export default {
  name: 'TeamCard',
  data() {
    return {
      modalVisible: false,
      selectedTeamMember: {}, // to store the selected team member data
      team: [
        {
          path: 'RKPandey.jpg',
          name: 'Raj Kumar Pandey',
          role: 'Director Technical'
        },
        {
          path: 'LalJiDwivedi.jpg',
          name: 'Lal Jee Dwivedi',
          role: 'Director Operations'
        },
        {
          path: 'RKMishra.jpg',
          name: 'Dr. R.K. Mishra',
          role: '#N/A'
        }
      ],
    };
  },
  methods: {
    showModal(member) {
      this.selectedTeamMember = member;
    }
  }
}
</script>
