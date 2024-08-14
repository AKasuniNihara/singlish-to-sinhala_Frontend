<template>
<div class="container mt-5">
    <div class="row mb-4">
        <!-- Input Data Card -->
        <div class="col-md-6 mb-4">
            <div class="card h-100">
                <div class="card-header">
                    <h2 class="card-title">Input Code-Mixed Data</h2>
                </div>
                <div class="card-body">
                    <textarea v-model="inputData" class="form-control" rows="5" placeholder="Enter code-mixed Sinhala-English text here..."></textarea>
                </div>
            </div>
        </div>
        <!-- Display Translated Data Card -->
        <div class="col-md-6 mb-4">
            <div class="card h-100">
                <div class="card-header">
                    <h2 class="card-title">Translated Pure Sinhala Data</h2>
                </div>
                <div class="card-body">
                    <p>{{ translatedData }}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row mb-4">
        <!-- Review Card -->
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">Review the Translation</h2>
                </div>
                <div class="card-body text-center">
                    <div class="review-section">
                        <div class="d-flex justify-content-center align-items-center mb-3">
                            <span @click="handleReview('correct')" :class="{'text-warning': review === 'correct', 'text-muted': review !== 'correct'}" class="emoji mx-3">
                                👍
                            </span>
                            <span @click="handleReview('incorrect')" :class="{'text-warning': review === 'incorrect', 'text-muted': review !== 'incorrect'}" class="emoji mx-3">
                                👎
                            </span>
                        </div>
                        <p class="mb-0 text-center">{{ reviewMessage }}</p>
                        <div class="mt-3">
                            <input v-model="comment" class="form-control mt-2" placeholder="Add a comment..." />
                        </div>
                        <div class="mt-3">
                            <button class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ReviewPage',
    data() {
        return {
            inputData: '',
            translatedData: '', // Set this with your translation logic
            review: null,
            comment: '',
            reviewMessage: 'Please provide your feedback',
        };
    },
    methods: {
        handleReview(type) {
            if (this.review === type) {
                this.review = null;
                this.reviewMessage = 'Please provide your feedback';
            } else {
                this.review = type;
                if(type === 'correct'){
                    this.reviewMessage = "Generated sentence is correct"
                }
                else if(type === 'incorrect'){
                    this.reviewMessage = "Generated sentence is incorrect"
                }
            }
        }
    }
};
</script>

<style scoped>
.card {
    border-radius: 0.5rem;
}

.emoji {
    font-size: 2rem;
    cursor: pointer;
    margin: 0 1rem;
}

.message-icon {
    font-size: 1.5rem;
    margin-right: 0.5rem;
}

.review-section {
  position: sticky;
  top: 20px; /* Adjust as needed */
  z-index: 1; /* Ensure it's above other content */
  background-color: #fff; /* Optional: background to make it stand out */
  padding: 10px;
  border-radius: 5px;
}
</style>
