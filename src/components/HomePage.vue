<template>
  <b-container class="mt-5">
    <b-row>
      <!-- Research Description -->
      <b-col cols="12" md="6">
        <b-card class="mb-4">
          <b-card-header>
            <h4>Research Overview</h4>
          </b-card-header>
          <b-card-body>
            <p>
              Welcome to our research project on translating Sinhala-English code-mixed text into Sinhala using the BERT transformer model. This application aims to provide an efficient and accurate translation tool for users working with code-mixed language data.
            </p>
          </b-card-body>
        </b-card>
      </b-col>
      
      <!-- What Can We Do -->
      <b-col cols="12" md="6">
        <b-card class="mb-4">
          <b-card-header>
            <h4>What You Can Do</h4>
          </b-card-header>
          <b-card-body>
            <ul>
              <li>Translate code-mixed Sinhala-English text to pure Sinhala.</li>
              <li>Evaluate translation accuracy and quality.</li>
              <li>Explore different translation models and settings.</li>
            </ul>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
    
    <b-row>
      <!-- How to Use -->
      <b-col cols="12">
        <b-card class="mb-4">
          <b-card-header>
            <h4>How to Use This Application</h4>
          </b-card-header>
          <b-card-body>
            <ol>
              <li>Navigate to the input page and enter your code-mixed text.</li>
              <li>Select your preferred translation model and settings.</li>
              <li>Click the "Translate" button to get the translated text.</li>
              <li>Review and analyze the results provided by the application.</li>
            </ol>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style scoped>
/* Add any additional styling here if needed */
</style>
