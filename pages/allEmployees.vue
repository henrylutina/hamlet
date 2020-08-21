<template>
  <div>
    <navbar />
    <div class="pr-5 pl-5 mt-5">
      <div class="row borderShow">
        <div class="col-sm-3 mt-3">
          <h1>Overview</h1>
        </div>
        <!-- <div class="col-sm-9 pt-2">
                    <div class="float-right">
                         <div class="btn btn-secondary">Update employees</div>
                        <div class="btn btn-secondary l-left">Hire</div>
                    </div>
                  
                </div> -->
      </div>
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-2 pt-4 pb-4 add-border">
              <h5>Fliters</h5>
              <label class="mt-3">Name</label>
              <input type="search" class="form-control" name="" id="" />

              <h5 class="mt-5">Type</h5>
              <div class="d-flex mt-4">
                <div>
                  <input type="checkbox" name="" class="" id="" />
                </div>
                <div class="l-left-1">
                  <label class="check-1">Full Time</label>
                </div>
              </div>
              <div class="d-flex">
                <div>
                  <input type="checkbox" name="" class="" id="" />
                </div>
                <div class="l-left-1">
                  <label class="check-1">Part Time</label>
                </div>
              </div>
              <div class="d-flex">
                <div>
                  <input type="checkbox" name="" class="" id="" />
                </div>
                <div class="l-left-1">
                  <label class="check-1">Intern</label>
                </div>
              </div>

              <h5 class="mt-5">Role</h5>
              <select class="custom-select increase_height" name>
                <option value selected disabled>Select Role</option>
                <option value="OND">Senior Back-end Dev</option>
                <option value="HND">Front-end Inter</option>
              </select>

              <h5 class="mt-3">Location</h5>
              <div class="d-flex">
                <div>
                  <input type="checkbox" name="" class="" id="" />
                </div>
                <div class="l-left-1">
                  <label class="check-1">Nigeria</label>
                </div>
              </div>

              <h5 class="mt-5">Department</h5>
              <select class="custom-select increase_height" name>
                <option value selected disabled>Department</option>
                <option value="OND">VR</option>
                <option value="HND">Jiggle</option>
              </select>
            </div>

            <div class="col-sm-10 pl-3">
              <table
                class="table table-responsive table-bordered table-hover border-0"
              >
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Job Type</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Department</th>
                    <th scope="col">Location</th>
                    <th scope="col">Start Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(employee, index) in employees" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>
                      {{ employee.first_name + " " + employee.other_names }}
                    </td>
                    <td>
                      {{ employee.job_details.employment_classification }}
                    </td>
                    <td>{{ employee.job_details.job_title }}</td>
                    <td>{{ employee.job_details.department }}</td>
                    <td>{{ employee.job_details.work_location }}</td>
                    <td>{{ employee.job_details.date_hired }}</td>
                  </tr>
                </tbody>
              </table>
              <div v-if="loader" class="text-center">
                  <span disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
                </span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "~/components/navbar.vue";
export default {
  components: {
    navbar
  },
  data() {
    return {
      employees: {},
      loader : true
    };
  },
  methods: {
    getEmployees() {
      this.$axios
        .get("https://hamlet-hrm.herokuapp.com/api/auth/admin")
        .then(res => {
          console.log(res.data.employees);
          this.employees = res.data.employees;
          this.loader = false
        });
    }
  },
  created() {
    this.getEmployees();
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.l-left {
  margin-left: 1rem !important;
}
.borderShow {
  border: 0.1px thick #000000 !important;
}
.l-left-1 {
  margin-left: 2rem !important;
}
input[type="checkbox"] {
  width: 30px;
  height: 30px;
}
.check-1 {
  font-size: 1.2rem;
}
.add-border {
  /* border: 1px solid #000000 !important; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
}
</style>
