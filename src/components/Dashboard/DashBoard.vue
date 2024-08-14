<template>
  <div class="container mt-5">
    <div class="row mb-4">
      <!-- Table Card -->
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h2 class="card-title">Data Table</h2>
          </div>
          <div class="card-body">
            <b-table
              :items="paginatedData"
              :fields="fields"
              striped
              hover
              :per-page="itemsPerPage"
              :current-page="currentPage"
              class="table table-striped table-hover"
              @page-change="handlePageChange"
            >
              <template #cell(singlish_sentence)="data">
                <span>{{ data.item.singlish_sentence }}</span>
              </template>
              <template #cell(sinhala_sentence)="data">
                <span>{{ data.item.sinhala_sentence }}</span>
              </template>
              <template #cell(correctness)="data">
                <span>{{ data.item.correctness }}</span>
              </template>
            </b-table>
            <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
              :per-page="itemsPerPage"
              @change="handlePageChange"
            ></b-pagination>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-4">
      <!-- Training Data Card -->
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h2 class="card-title">Training Data</h2>
          </div>
          <div class="card-body">
            <p>Percentage: {{ trainingData.percentage }}%</p>
            <p>Count: {{ trainingData.count }}</p>
          </div>
        </div>
      </div>
      <!-- Testing Data Card -->
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h2 class="card-title">Testing Data</h2>
          </div>
          <div class="card-body">
            <p>Percentage: {{ testingData.percentage }}%</p>
            <p>Count: {{ testingData.count }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <!-- Line Chart Card -->
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h2 class="card-title">Accuracy Over Time</h2>
          </div>
          <div class="card-body">
            <apexchart type="line" :options="chartOptions" :series="chartSeries" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BTable, BPagination } from 'bootstrap-vue';
import ApexCharts from 'vue-apexcharts';
import { tableData, totalRows } from './tableData.js'; 

export default {
  name: 'DashBoard',
  components: {
    BTable,
    BPagination,
    apexchart: ApexCharts
  },
  data() {
    return {
      tableData, // Initialize with imported data
      fields: [
        { key: 'singlish_sentence', label: 'Singlish Sentence' },
        { key: 'sinhala_sentence', label: 'Sinhala Sentence' },
        { key: 'correctness', label: 'Correctness' }
      ],
      currentPage: 1,
      itemsPerPage: 10,
      totalRows, // Initialize with imported total rows
      trainingData: {
        percentage: 85,
        count: 150
      },
      testingData: {
        percentage: 90,
        count: 100
      },
      chartOptions: {
        chart: {
          id: 'accuracy-chart'
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
        }
      },
      chartSeries: [
        {
          name: 'Accuracy',
          data: [80, 85, 90, 92, 88, 95, 97]
        }
      ]
    };
  },
  computed: {
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.tableData.slice(start, end);
    }
  },
  methods: {
    handlePageChange(page) {
      this.currentPage = page;
    }
  }
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
